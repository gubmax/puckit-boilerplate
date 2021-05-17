import { action, makeObservable, observable } from 'mobx'

import { HttpRequestResponse, HttpRequestBody } from 'src/infra/http'
import { QueryImpl } from 'src/utils/queries'

export abstract class QueryModel<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> extends QueryImpl<R, B> {
  constructor() {
    super()
    makeObservable<QueryImpl, 'reduce'>(this, {
      status: observable,
      reduce: action,
    })
  }
}
