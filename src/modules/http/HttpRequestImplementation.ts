import { httpRequest } from './httpRequest'
import { HttpRequestBody, HttpRequestInit, HttpRequestResponse } from './types'

export abstract class HttpRequestImplementation<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> {
  abstract readonly init: HttpRequestInit
  
  send(body?: B): Promise<R> {
    return httpRequest<R, B>(this.init, body)
  }
}
