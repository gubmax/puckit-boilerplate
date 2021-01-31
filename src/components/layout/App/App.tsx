import React, { FC } from 'react'

import {ServerSidePropsProvider} from '../../services'
import {Main} from '../Main'
import { AppProps } from './App.types'

const App: FC<AppProps> = ({ serverSideProps = {} }) => (
  <ServerSidePropsProvider value={serverSideProps}>
    <Main />
  </ServerSidePropsProvider>
)

export default App
