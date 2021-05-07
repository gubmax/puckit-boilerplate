import { action, makeObservable, observable } from 'mobx'

import { HttpRequestResponse, HttpRequestBody, QueryImpl } from 'src/modules/http'

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
