/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import { Header } from '../Header'
import { MainServerSideProps } from './types'
import { Sidebar } from '../Sidebar'
import { useServerSideProps } from '../../../hooks'
import s from './styles'

export const getServerSideProps = async (): Promise<MainServerSideProps> => {
  const res = await fetch('http://localhost:8000/api/data', { method: 'POST' })
  const serverSideMsg: string = await res.text()
  return { serverSideMsg }
}

const Main: FC = () => {
  const { serverSideMsg } = useServerSideProps<MainServerSideProps>()

  return (
    <div css={s.wrapper}>
      <Sidebar />
      <div css={s.main}>
        <Header />
        <main>
          <p css={s.title}>{serverSideMsg}</p>
        </main>
      </div>
    </div>
  )
}

export default Main
