/** @jsx jsx */
import { FC, useMemo } from 'react'
import { jsx } from '@emotion/react'
import { useRoutes } from 'react-router-dom'

import { useServerSideProps } from 'src/hooks'
import { SsrMessageRequest } from 'src/services/requests'
import { Header, Sidebar } from 'src/components/layout'
import { ROUTES } from './constants'
import { MainServerSideProps } from './types'
import s from './styles'

export async function getServerSideProps(): Promise<MainServerSideProps> {
  const { text } = await new SsrMessageRequest().send()
  return { serverSideMsg: text }
}

const Main: FC = () => {
  const { serverSideMsg } = useServerSideProps<MainServerSideProps>()
  const element = useRoutes(ROUTES)

  return useMemo(
    () => (
      <div css={s.page}>
        <Header />
        <Sidebar />
        <main css={s.main}>
          {element}
          <p>{serverSideMsg}</p>
        </main>
      </div>
    ),
    [serverSideMsg, element],
  )
}

export default Main
