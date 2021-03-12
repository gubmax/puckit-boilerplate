import Fastify from 'fastify'
import fetch from 'node-fetch'

import { useRouter } from 'server/router'

global.fetch = fetch

async function bootstrap() {
  const server = Fastify()

  useRouter(server)

  await server.listen(process.env.APP_SERVER_PORT || 8000)

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}

bootstrap()
