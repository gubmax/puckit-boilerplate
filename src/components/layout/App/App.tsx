import React, { FC, StrictMode } from 'react'
import { Global } from '@emotion/react'

import { ServerSidePropsProvider } from 'src/components/services'
import { Main } from 'src/components/layout'
import { AppProps } from './types'
import s from './styles'

const App: FC<AppProps> = ({ serverSideProps = {} }) => {
  return (
    <StrictMode>
      <ServerSidePropsProvider value={serverSideProps}>
        <Global styles={s} />
        <Main />
      </ServerSidePropsProvider>
    </StrictMode>
  )
}

export default App
