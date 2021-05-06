import { ErrorImplProps } from 'src/modules/error'
import { CriticalError } from 'src/services/errors'
import { HttpRequestBody, HttpRequestInit, HttpRequestResponse } from './types'

/**
 * A wrapper for using the Fetch API
 */
export async function httpRequest<R extends HttpRequestResponse, B extends HttpRequestBody>(
  { input, ...init }: HttpRequestInit,
  body?: B
): Promise<R> {
  try {
    const res = await fetch(input, { ...init, body: JSON.stringify(body) })
    const data = await res.json() as R
    return data
  } catch (error: unknown) {
    const errorProps: ErrorImplProps = {}

    if (typeof error === 'string') {
      errorProps.message = error
    } else if (error instanceof Error) {
      errorProps.message = error.message
    }

    throw new CriticalError(errorProps)
  }
}
