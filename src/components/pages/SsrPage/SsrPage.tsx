import { FC, useEffect, useMemo } from 'react'
import { Action } from 'history'

import { ssrMessageRequest } from 'src/services/requests'
import { useServerSideProps, useRequest, useHistory } from 'src/hooks'
import { H1 } from 'src/components/typography'
import { Loader } from 'src/components/elements'

import { SsrPageServerSideProps } from './types'

export async function getServerSideProps(): Promise<SsrPageServerSideProps> {
  const { text } = await ssrMessageRequest.send()
  return { serverSideMsg: text }
}

const SsrPage: FC = () => {
  const { serverSideMsg } = useServerSideProps()
  const [{ loading, data = { text: serverSideMsg } }, messageRequest] = useRequest(ssrMessageRequest)
  const { action } = useHistory()

  useEffect(() => {
    if (action === Action.Push || !serverSideMsg) {
      void messageRequest()
    }
  }, [action, messageRequest, serverSideMsg])

  return useMemo(() => (
    <>
      <H1>Server-Side Rendering</H1>
      {loading ? <Loader/> : <p>{data?.text}</p>}
    </>
  ), [loading, data])
}

export default SsrPage
