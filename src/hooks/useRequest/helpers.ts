import { RequestActions } from './constants'
import { RequestReducer } from './types'

export const requestReducer: RequestReducer = (state, action) => {
  switch (action.type) {
    case RequestActions.START:
      return { loading: true }

    case RequestActions.SUCCESS:
      return { data: action.payload, loading: false }

    case RequestActions.FAILURE:
      return { error: action.payload as Error, loading: false }
      
    default:
      return { ...state }
  }
}
