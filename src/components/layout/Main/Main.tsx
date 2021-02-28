/** @jsx jsx */
import { FC, useMemo } from 'react'
import { jsx } from '@emotion/react'

import { useServerSideProps } from 'src/hooks'
import { SsrMessageRequest } from 'src/services/requests'
import { Header, Sidebar } from 'src/components/layout'
import { MainServerSideProps } from './types'
import s from './styles'

export async function getServerSideProps(): Promise<MainServerSideProps> {
  const { text } = await new SsrMessageRequest().send()
  return { serverSideMsg: text }
}

const Main: FC = () => {
  const { serverSideMsg } = useServerSideProps<MainServerSideProps>()

  return useMemo(
    () => (
      <div css={s.page}>
        <Header />
        <Sidebar />
        <main css={s.main}>
          <h1 css={s.title}>Server Side Rendering</h1>
          <p>{serverSideMsg}</p>
        </main>
      </div>
    ),
    [serverSideMsg],
  )
}

export default Main
