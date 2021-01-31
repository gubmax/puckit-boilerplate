/** @jsx jsx */
import { FC, useContext } from 'react'
import { jsx } from '@emotion/react'

import { ServerSidePropsContext } from '../../../components/services/ServerSidePropsProvider'
import { Header } from '../Header'
import { MainServerSideProps } from './types'
import s from './styles'

export const getServerSideProps = async (): Promise<MainServerSideProps> => {
  const res = await fetch('http://localhost:8000/api/data', { method: 'POST' })
  const serverSideMsg: string = await res.text()
  return { serverSideMsg }
}

const Main: FC = () => {
  const { serverSideMsg } = useContext<MainServerSideProps>(ServerSidePropsContext)

  return (
    <div css={s.wrapperStyles}>
      <Header />
      <main>
        <p css={s.titleStyles}>{serverSideMsg}</p>
      </main>
    </div>
  )
}

export default Main
