import { HttpRequestImplementation, HttpRequestMethods } from 'src/modules/http';
import { ApiRoutes } from './constants';

interface SsrMessageResponse {
  text: string;
} 

class SsrMessageRequest extends HttpRequestImplementation<SsrMessageResponse> {
  init = {
    input: ApiRoutes.SSR_MESSAGE,
    method: HttpRequestMethods.POST,
  }
}

export default new SsrMessageRequest()
