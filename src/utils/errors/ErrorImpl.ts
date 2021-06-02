export interface ErrorImplProps {
  title?: string;
  message?: string;
}

export abstract class ErrorImpl extends Error {
  abstract readonly type: string | number;
  abstract readonly level: number;
  readonly title?: string;

  constructor({ title, message = '' }: ErrorImplProps = {}) {
    super(message)
    this.title = title
  }
}
