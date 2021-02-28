import { HttpRequestImplementation, HttpRequestMethods } from 'src/modules/http';
import { ApiRoutes } from './constants';

interface SsrMessageResponse {
  text: string;
} 

export class SsrMessageRequest extends HttpRequestImplementation<SsrMessageResponse> {
  init = {
    input: ApiRoutes.DATA,
    method: HttpRequestMethods.POST,
  }
}
