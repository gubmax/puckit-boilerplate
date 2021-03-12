import { Reducer } from 'react'

import { HttpRequestImplementation } from 'src/modules/http'
import { RequestActions } from './constants'

type HttpReqImp = HttpRequestImplementation
type HttpReqSend<T extends HttpReqImp> = T['send']

export type RequestResponse<T extends HttpReqImp> =
  HttpReqSend<T> extends (body: infer B) => Promise<infer R> ? R : any

export interface RequestState<T extends HttpReqImp = HttpReqImp> {
  data?:  RequestResponse<T>;
  error?: Error;
  loading: boolean;
}

export type Request<T extends HttpReqImp> =
  HttpReqSend<T> extends (body: infer B) => Promise<infer R>
    ? [B] extends [never]
      ? () => Promise<R>
      : (body: B) => Promise<R>
    : never 

type RequestStartAction = {
  type: RequestActions.START;
  payload?: never;
}

type RequestSuccessAction<T extends HttpReqImp = HttpReqImp> = {
  type: RequestActions.SUCCESS;
  payload?: RequestResponse<T>;
}

type RequestFailureAction = {
  type: RequestActions.FAILURE;
  payload?: Error;
}

export type RequestAction = RequestStartAction | RequestSuccessAction | RequestFailureAction

export type RequestReducer<T extends HttpReqImp = HttpReqImp> = Reducer<RequestState<T>, RequestAction>
