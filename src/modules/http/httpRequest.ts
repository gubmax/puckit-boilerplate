import { ExtendedErrors } from 'src/services';
import { HttpRequest } from './types';

/**
 * A wrapper for using the Fetch API
 */
export async function httpRequest<R extends object, B extends BodyInit | null = null>(
  { input, ...init }: HttpRequest,
  body?: B
): Promise<R> {
  try {
    const res = await fetch(input, { ...init, body })
    const data: R = await res.json()
    return data;
  } catch (error) {
    throw new ExtendedErrors.CriticalError({message: error.message})
  }
}
