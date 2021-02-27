import { HttpRequest, HttpRequestMethods } from 'src/modules/http';

export namespace DataRequest {
  // export interface Body {}

  export const config: HttpRequest = {
    input: 'http://localhost:8000/api/data',
    method: HttpRequestMethods.POST,
  }

  export interface Response {
    text: string;
  }
}
