import { HttpRequestMethods } from 'src/modules/http'
import { QueryModel } from 'src/models'
import { ApiRoutes } from './constants'

export interface SsrMessageResponse {
  text: string;
}

export const SsrMessageInit = {
  input: ApiRoutes.SSR_MESSAGE,
  method: HttpRequestMethods.POST,
}

class SsrMessageQuery extends QueryModel<SsrMessageResponse> {
  init = SsrMessageInit
}

export default new SsrMessageQuery()
