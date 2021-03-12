import { RequestState } from './types'

export enum RequestActions {
  START = 'START',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export const INITIAL_STATE: RequestState = {
  loading: false,
}
