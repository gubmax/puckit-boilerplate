/** @jsx jsx */
import { FC, Fragment, useEffect, useMemo } from 'react'
import { jsx } from '@emotion/react'

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
  const { serverSideMsg } = useServerSideProps<SsrPageServerSideProps>()
  const [{ loading, data }, messageRequest] = useRequest(ssrMessageRequest)

  useEffect(() => {
    messageRequest()
  }, [messageRequest])

  return useMemo(() => (
    <Fragment>
      <H1>Server-Side Rendering</H1>
      {loading && <Loader/>}
      <p>{serverSideMsg || data?.text}</p>
    </Fragment>
  ), [serverSideMsg, loading, data])
}

export default SsrPage
