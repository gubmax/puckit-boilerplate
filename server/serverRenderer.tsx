import { MemoryRouter } from 'react-router'
import { matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import { PageRoutes } from 'src/infra/http'
import { App } from 'src/components/layout'
import { ServerSideProps } from 'src/contexts'
import htmlTemplate from '../dist/index.html'

export async function serverRenderer(url: string): Promise<string> {
  let serverSideProps: ServerSideProps = {}

  if (matchPath(url, PageRoutes.SSR)) {
    const { getServerSideProps } = await import(`${__dirname}/../src/components/pages/SsrPage`) as {
      getServerSideProps: () => Promise<ServerSideProps>
    }
    serverSideProps = await getServerSideProps()
  }

  const markup = (
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
