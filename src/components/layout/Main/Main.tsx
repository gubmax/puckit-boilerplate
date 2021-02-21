/** @jsx jsx */
import { FC, useMemo } from 'react'
import { jsx } from '@emotion/react'

import { useServerSideProps } from 'src/hooks'
import { Header, Sidebar } from 'src/components/layout'
import { Wrapper } from 'src/components/elements'
import { MainServerSideProps } from './types'
import s from './styles'

export const getServerSideProps = async (): Promise<MainServerSideProps> => {
  const res = await fetch('http://localhost:8000/api/data', { method: 'POST' })
  const serverSideMsg: string = await res.text()
  return { serverSideMsg }
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
