import { HttpRequestMethods } from './constants';

export type HttpRequestBody = object
export type HttpRequestResponse = object | void

export interface HttpRequestInit {
  readonly input: RequestInfo;
  readonly method?: HttpRequestMethods;
  readonly headers?: Headers;
}
