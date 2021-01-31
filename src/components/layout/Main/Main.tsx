import React, { FC, useContext } from 'react'

import { ServerSidePropsContext } from '../../../components/services/ServerSidePropsProvider'
import { Header } from '../Header'
import { MainServerSideProps } from './Main.types'

import s from './Main.module.scss'

export const getServerSideProps = async (): Promise<MainServerSideProps> => {
  const res = await fetch('http://localhost:8000/api/data', { method: 'POST' })
  const serverSideMsg: string = await res.text()
  return { serverSideMsg }
}

const Main: FC = () => {
  const { serverSideMsg } = useContext<MainServerSideProps>(ServerSidePropsContext)

  return (
    <div className={s.wrapper}>
      <Header />
      <main>
        <p className={s.title}>{serverSideMsg}</p>
      </main>
    </div>
  )
}

export default Main
