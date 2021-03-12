import { RequestActions } from './constants'
import { RequestReducer } from './types'

export const requestReducer: RequestReducer = (state, { type, payload }) => {
  switch (type) {
    case RequestActions.START:
      return { loading: true };

    case RequestActions.SUCCESS:
      return { data: payload, loading: false };

    case RequestActions.FAILURE:
      return { error: payload as Error, loading: false };
      
    default:
      return { ...state }
  }
}
