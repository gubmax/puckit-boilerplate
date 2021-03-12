import { FastifyInstance, RouteShorthandOptions } from 'fastify'

import { SsrMessageService } from 'server/services'
import { serverRenderer } from 'server/serverRenderer'

const opts: RouteShorthandOptions = {}

export function useRouter(server: FastifyInstance) {
  server.post('/api/ssr-message', opts, SsrMessageService.getMessage)
  server.get('*', opts, (response, reply) => {
    reply.type('text/html')
    return serverRenderer(response.url)
  })
}
