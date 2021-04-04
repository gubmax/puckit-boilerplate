import { Reducer } from 'react'

import { HttpRequestImpl } from 'src/modules/http'
import { RequestActions } from './constants'

type HttpReqSend<T extends HttpRequestImpl> = T['send']

export type RequestResponse<T extends HttpRequestImpl> =
  HttpReqSend<T> extends (body: infer B) => Promise<infer R> ? R : unknown

export interface RequestState<T extends HttpRequestImpl = HttpRequestImpl> {
  data?:  RequestResponse<T>;
  error?: Error;
  loading: boolean;
}

export type Request<T extends HttpRequestImpl> =
  HttpReqSend<T> extends (body: infer B) => Promise<infer R>
    ? [B] extends [never]
      ? () => Promise<R>
      : (body: B) => Promise<R>
    : never 

type RequestStartAction = {
  type: RequestActions.START;
  payload?: never;
}

type RequestSuccessAction<T extends HttpRequestImpl = HttpRequestImpl> = {
  type: RequestActions.SUCCESS;
  payload?: RequestResponse<T>;
}

type RequestFailureAction = {
  type: RequestActions.FAILURE;
  payload?: Error;
}

export type RequestAction = RequestStartAction | RequestSuccessAction | RequestFailureAction

export type RequestReducer<T extends HttpRequestImpl = HttpRequestImpl> = Reducer<RequestState<T>, RequestAction>
