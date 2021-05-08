import { FC } from 'react'

import { H1 } from 'src/components/typography'
import { WorkInProgressMsg } from 'src/components/elements'

const ErrorHandlingPage: FC = () => {
  return (
    <>
      <H1>Error Handling</H1>
      <WorkInProgressMsg />
    </>
  )
}

export default ErrorHandlingPage
