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
        <Sidebar />
        <Header />
        <main css={s.main}>
          <Wrapper css={s.wrapper}>
            <p css={s.title}>{serverSideMsg}</p>
          </Wrapper>
        </main>
      </div>
    ),
    [serverSideMsg],
  )
}

export default Main
