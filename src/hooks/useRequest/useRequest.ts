import { useCallback, useEffect, useReducer, useRef } from 'react'

import { HttpRequestImpl } from 'src/modules/http'
import { noop } from 'src/helpers'
import { INITIAL_STATE, RequestActions } from './constants'
import { requestReducer } from './helpers'
import { RequestState, Request, RequestReducer } from './types'

export function useRequest<T extends HttpRequestImpl<unknown, unknown>>(
  request: T,
): [RequestState<T>, Request<T>] {
  const [state, dispatch] = useReducer<RequestReducer<T>>(requestReducer, INITIAL_STATE)
  const didCancelRef = useRef(false)

  const fetch = useCallback(
    async (body) => {
      dispatch({ type: RequestActions.START })

      await request.send(body).catch(noop)

      if (didCancelRef.current) {
        return
      }

      const { error, response } = request

      if (error) {
        dispatch({ type: RequestActions.FAILURE, payload: error })
        throw error
      }

      dispatch({ type: RequestActions.SUCCESS, payload: response })
      return response
    },
    [request],
  )

  useEffect(() => () => {
    didCancelRef.current = true
  }, [])

  return [state, fetch as Request<T>]
}
