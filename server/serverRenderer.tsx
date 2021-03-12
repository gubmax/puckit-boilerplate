import React from 'react'
import { MemoryRouter } from 'react-router'
import { matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import { App } from 'src/components/layout/App'
import { PageRoutes } from 'src/services/requests'
import htmlTemplate from '../dist/index.html'

export async function serverRenderer(url: string): Promise<string> {
  let serverSideProps: object = {}

  if (matchPath(url, PageRoutes.SSR)) {
    const { getServerSideProps } = require(`${__dirname}/../src/components/pages/SsrPage`)
    serverSideProps = await getServerSideProps()
  }

  let markup = (
    <MemoryRouter initialEntries={[url]}>
      <App serverSideProps={serverSideProps} />
    </MemoryRouter>
  )

  const initialHtml = renderToString(markup)

  return htmlTemplate
    .replace('</head>', `
        <script script type="text/javascript" id="state">
          window.SERVER_SIDE_PROPS = ${JSON.stringify(serverSideProps)};
          document.getElementById('state').remove();
        </script>
      </head>
    `)
    .replace('<div id="app-root">', `<div id="app-root">${initialHtml}`)
}
