import React, { FC, StrictMode } from 'react'
import { Global } from '@emotion/react'

import { ServerSidePropsProvider } from 'src/components/services'
import { Main } from 'src/components/layout'
import { AppProps } from './types'
import s from './styles'

const App: FC<AppProps> = ({ serverSideProps = {} }) => {
  return (
    <StrictMode>
      <Global styles={s} />
      <ServerSidePropsProvider value={serverSideProps}>
        <Main />
      </ServerSidePropsProvider>
    </StrictMode>
  )
}

export default App
