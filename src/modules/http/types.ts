import { HttpRequestMethods } from './constants';

export type HttpRequestBody = object
export type HttpRequestResponse = object

export interface HttpRequestInit {
  readonly input: RequestInfo;
  readonly method?: HttpRequestMethods;
  readonly headers?: Headers;
}
