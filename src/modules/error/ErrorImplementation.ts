import { ErrorImplementationArg } from './types'

export abstract class ErrorImplementation extends Error {
  abstract readonly type: string | number;
  readonly title?: string;
  readonly message: string;

  constructor({ title, message = '' }: ErrorImplementationArg = {}) {
    super()
    this.title = title
    this.message = message
  }
}
