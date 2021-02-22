import React, { FC, StrictMode } from 'react'
import { Global } from '@emotion/react'

import { ServerSidePropsContext } from 'src/components/services'
import { Main } from 'src/components/layout'
import { AppProps } from './types'
import s from './styles'

const App: FC<AppProps> = ({ serverSideProps = {} }) => {
  return (
    <StrictMode>
      <Global styles={s} />
      <ServerSidePropsContext.Provider value={serverSideProps}>
        <Main />
      </ServerSidePropsContext.Provider>
    </StrictMode>
  )
}

export default App
