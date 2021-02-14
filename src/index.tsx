import React from 'react'
import { render, hydrate } from 'react-dom'

import { App } from './components/layout/App'
import { ServerSideProps } from './components/services/ServerSidePropsProvider'

let serverSideProps: ServerSideProps

if (window.SERVER_SIDE_PROPS) {
  serverSideProps = { ...window.SERVER_SIDE_PROPS }
  delete window.SERVER_SIDE_PROPS
}

hydrate(<App serverSideProps={serverSideProps} />, document.getElementById('app-root'))
