/** @jsx jsx */
import { FC, useMemo } from 'react'
import { jsx } from '@emotion/react'

import { useServerSideProps } from 'src/hooks'
import { httpRequest } from 'src/modules/http'
import { DataRequest } from 'src/services/requests'
import { Header, Sidebar } from 'src/components/layout'
import { MainServerSideProps } from './types'
import s from './styles'

export const getServerSideProps = async (): Promise<MainServerSideProps> => {
  const { text } = await httpRequest<DataRequest.Response>(DataRequest.config)
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
