import { ErrorImplementationArg } from './types';

export abstract class ErrorImplementation extends Error {
  abstract readonly type: string | number;
  readonly code: string;
  readonly title?: string;
  readonly message: string;

  constructor({code, title, message = ''}: ErrorImplementationArg) {
    super()
    this.code = code
    this.title = title
    this.message = message
  }
}
