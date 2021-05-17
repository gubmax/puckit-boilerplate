import { ApiRoutes, HttpRequestMethods } from 'src/infra/http'
import { QueryModel } from 'src/models'

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
