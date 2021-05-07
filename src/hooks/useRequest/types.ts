import { Reducer } from 'react'

import { QueryImpl } from 'src/modules/http'
import { RequestActions } from './constants'

type HttpReqSend<T extends QueryImpl> = T['send']

export type RequestResponse<T extends QueryImpl> =
  HttpReqSend<T> extends (body: infer B) => Promise<infer R> ? R : unknown

export interface RequestState<T extends QueryImpl = QueryImpl> {
  data?:  RequestResponse<T>;
  error?: Error;
  loading: boolean;
}

export type Request<T extends QueryImpl> =
  HttpReqSend<T> extends (body: infer B) => Promise<infer R>
    ? [B] extends [never]
      ? () => Promise<R>
      : (body: B) => Promise<R>
    : never 

export type RequestAction =
  | { type: RequestActions.START } 
  | { type: RequestActions.SUCCESS; payload: unknown }
  | { type: RequestActions.FAILURE; payload: unknown }

export type RequestReducer<T extends QueryImpl = QueryImpl> = Reducer<RequestState<T>, RequestAction>
