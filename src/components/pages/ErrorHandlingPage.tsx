import { FC, useState } from 'react'

import { Button } from 'src/components/inputs'
import { ErrorBoundary, ErrorLevels } from 'src/components/services'
import { H1 } from 'src/components/typography'
import { ErrorImpl, FatalError, SevereError } from 'src/utils/errors'

const ExampleComponent: FC<{error?: new () => ErrorImpl}> = ({ error: ErrorImpl  }) => {
  if (ErrorImpl) {
    throw new ErrorImpl()
  }

  return null
}

const ErrorHandlingPage: FC = () => {
  const [ErrorImpl, setErrorImpl] = useState<(new () => ErrorImpl) | undefined>()

  const throwError = (errorImpl: new () => ErrorImpl) => () => setErrorImpl(() => errorImpl)
  const fatalFallback = () => <span>FATAL ERROR CAUTCH</span>
  const severeFallback = () => <span>SEVERE ERROR CAUTCH</span>

  return (
    <>
      <H1>Error Handling</H1>
      <ErrorBoundary fallback={fatalFallback} level={ErrorLevels.FATAL}>
        <Button onClick={throwError(FatalError)}>Throw Fatal error</Button>
        <br />
        <ErrorBoundary fallback={severeFallback}>
          <Button onClick={throwError(SevereError)}>Throw Severe error</Button>
          <ExampleComponent error={ErrorImpl} />
        </ErrorBoundary>
      </ErrorBoundary>
    </>
  )
}

export default ErrorHandlingPage
