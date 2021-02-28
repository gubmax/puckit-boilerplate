import { CriticalError } from 'src/services/errors';
import { HttpRequestBody, HttpRequestInit, HttpRequestResponse } from './types';

/**
 * A wrapper for using the Fetch API
 */
export async function httpRequest<R extends HttpRequestResponse, B extends HttpRequestBody>(
  { input, ...init }: HttpRequestInit,
  body?: B
): Promise<R> {
  try {
    const res = await fetch(input, { ...init, body: JSON.stringify(body) })
    const data: R = await res.json()
    return data;
  } catch (error) {
    throw new CriticalError({message: error.message})
  }
}
