import { render, hydrate } from 'react-dom'

import { App } from 'src/components/layout'
import { BrowserRouter } from 'src/components/services'
import { ServerSideProps } from 'src/contexts'

let serverSideProps: ServerSideProps = {}

if (window.SERVER_SIDE_PROPS) {
  serverSideProps = { ...window.SERVER_SIDE_PROPS }
  delete window.SERVER_SIDE_PROPS
}

const init = module.hot ? render : hydrate

const markup = (
  <BrowserRouter>
    <App serverSideProps={serverSideProps} />
  </BrowserRouter>
)

init(markup, document.getElementById('app-root'))
