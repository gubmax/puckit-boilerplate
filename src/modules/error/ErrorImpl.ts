import { ErrorImplProps } from './types'

export abstract class ErrorImpl extends Error {
  abstract readonly type: string | number;
  readonly title?: string;

  constructor({ title, message = '' }: ErrorImplProps = {}) {
    super(message)
    this.title = title
  }
}
