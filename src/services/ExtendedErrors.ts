import { ErrorImplementation } from 'src/modules/error';

export namespace ExtendedErrors {
  export enum ErrorTypes {
    WARNING,
    EXCEPTION,
    CRITICAL,
  }
  
  export class Warning extends ErrorImplementation {
    type = ErrorTypes.WARNING
  }

  export class Exception extends ErrorImplementation {
    type = ErrorTypes.EXCEPTION
  }
  
  export class CriticalError extends ErrorImplementation {
    type = ErrorTypes.CRITICAL
  }
}
