import { useLayoutEffect, useRef } from 'react'
import { Action } from 'history'

import { QueryImpl } from 'src/utils/queries'
import { useHistory } from '.'

export function useQueryLoader<T extends QueryImpl<unknown, unknown>>(
  request: T, force = false, body?: T extends QueryImpl<unknown, infer B> ? B : never,
): T {
  const { action } = useHistory()
  const wasNotCalledRef = useRef(force)

  useLayoutEffect(() => {
    if (action === Action.Push || force) {
      wasNotCalledRef.current = false
      void request.send(body)
    }
  }, [action, body, force, request])

  return { ...request, loading: request.loading || wasNotCalledRef.current }
}
