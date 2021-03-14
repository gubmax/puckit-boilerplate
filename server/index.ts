import Fastify from 'fastify'
import fetch from 'node-fetch'

import { useRouter } from './router'

global.fetch = fetch

async function bootstrap(): Promise<void> {
  const server = Fastify()

  useRouter(server)

  await server.listen(process.env.APP_SERVER_PORT || 8000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => void server.close())
  }
}

void bootstrap()
