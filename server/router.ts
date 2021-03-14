import { FastifyInstance, RouteShorthandOptions } from 'fastify'

import { SsrMessageService } from './services'
import { serverRenderer } from './serverRenderer'

const opts: RouteShorthandOptions = {}

export function useRouter(server: FastifyInstance): void {
  server.post('/api/ssr-message', opts, () => SsrMessageService.getMessage())
  server.get('*', opts, (response, reply) => {
    void reply.type('text/html')
    return serverRenderer(response.url)
  })
}
