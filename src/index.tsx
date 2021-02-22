import React from 'react'
import { render, hydrate } from 'react-dom'

import { App } from 'src/components/layout'
import { ServerSideProps } from 'src/components/services/ServerSidePropsContext'

let serverSideProps: ServerSideProps

if (window.SERVER_SIDE_PROPS) {
  serverSideProps = { ...window.SERVER_SIDE_PROPS }
  delete window.SERVER_SIDE_PROPS
}

const renderApp = module.hot ? render : hydrate
renderApp(<App serverSideProps={serverSideProps} />, document.getElementById('app-root'))
