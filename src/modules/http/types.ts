import { HttpRequestMethods } from './constants';

export interface HttpRequest {
  readonly input: RequestInfo;
  readonly method?: HttpRequestMethods;
  readonly headers?: Headers;
}
