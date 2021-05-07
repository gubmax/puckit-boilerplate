import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { httpRequest } from 'src/modules/http'
import { SsrMessageInit, SsrMessageQuery, SsrMessageResponse } from 'src/services/http'
import { useServerSideProps, useQueryLoader } from 'src/hooks'
import { H1 } from 'src/components/typography'
import { Loader } from 'src/components/elements'

import { SsrPageServerSideProps } from './types'

export async function getServerSideProps(): Promise<SsrPageServerSideProps> {
  const { text } = await httpRequest<SsrMessageResponse>(SsrMessageInit)
  return { serverSideMsg: text }
}

const SsrPage: FC = () => {
  const { serverSideMsg } = useServerSideProps()
  const {
    loading, response = { text: serverSideMsg },
  } = useQueryLoader(SsrMessageQuery, !serverSideMsg)

  return (
    <>
      <H1>Server-Side Rendering</H1>
      {loading ? <Loader/> : <p>{response.text}</p>}
    </>
  )
}

export default observer(SsrPage)
