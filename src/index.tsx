import React from 'react'
import { render } from 'react-dom'

import {App} from './components/layout/App'

import './index.css'

let serverSideProps

if (window.SERVER_SIDE_PROPS) {
  serverSideProps = { ...window.SERVER_SIDE_PROPS }
  delete window.SERVER_SIDE_PROPS
}

render(<App serverSideProps={serverSideProps} />, document.getElementById('app-root'))
