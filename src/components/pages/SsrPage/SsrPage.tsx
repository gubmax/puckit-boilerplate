import { FC, useEffect, useMemo } from 'react'

import { ssrMessageRequest } from 'src/services/requests'
import { useServerSideProps, useRequest } from 'src/hooks'
import { H1 } from 'src/components/typography'
import { Loader } from 'src/components/elements'

import { SsrPageServerSideProps } from './types'

export async function getServerSideProps(): Promise<SsrPageServerSideProps> {
  const { text } = await ssrMessageRequest.send()
  return { serverSideMsg: text }
}

const SsrPage: FC = () => {
  const { serverSideMsg } = useServerSideProps()
  const [{ loading, data }, messageRequest] = useRequest(ssrMessageRequest)

  useEffect(() => {
    void messageRequest()
  }, [messageRequest])

  return useMemo(() => (
    <>
      <H1>Server-Side Rendering</H1>
      {loading && <Loader/>}
      <p>{serverSideMsg || data?.text}</p>
    </>
  ), [serverSideMsg, loading, data])
}

export default SsrPage
