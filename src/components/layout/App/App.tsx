import React, { FC } from 'react'
import { Global } from '@emotion/react'

import {ServerSidePropsProvider} from '../../services'
import {Main} from '../Main'
import { AppProps } from './types'
import styles from './styles'

const App: FC<AppProps> = ({ serverSideProps = {} }) => {
  return (
    <ServerSidePropsProvider value={serverSideProps}>
      <Global styles={styles} />
      <Main />
    </ServerSidePropsProvider>
  )
}

export default App
