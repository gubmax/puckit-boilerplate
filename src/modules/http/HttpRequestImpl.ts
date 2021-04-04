import { httpRequest } from './httpRequest'
import { HttpRequestBody, HttpRequestInit, HttpRequestResponse } from './types'

export abstract class HttpRequestImpl<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> {
  abstract readonly init: HttpRequestInit
  response?: R
  error?: Error
  
  async send(...args: B extends never ? never : [B]): Promise<R>
  async send(body: B): Promise<R> {
    this.response = undefined
    this.error = undefined

    try {
      const res = await httpRequest<R, B>(this.init, body)
      this.response = res
      return res
    } catch (error: unknown) {
      let err: Error | undefined

      if (typeof error === 'string') {
        err = new Error(error)
      }

      if (error instanceof Error) {
        err = error
      }

      this.error = err
      throw error
    }
  }
}
