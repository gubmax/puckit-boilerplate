import { ErrorImplProps } from './types'

export abstract class ErrorImpl extends Error {
  abstract readonly type: string | number;
  readonly title?: string;
  readonly message: string;

  constructor({ title, message = '' }: ErrorImplProps = {}) {
    super()
    this.title = title
    this.message = message
  }
}
