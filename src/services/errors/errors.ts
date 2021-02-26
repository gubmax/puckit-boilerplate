import { ErrorImplementation } from 'src/modules/error';
import { ErrorTypes } from './constants';

export namespace ExtendedErrors {
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
