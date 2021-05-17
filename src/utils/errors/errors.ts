import { ExtendedErrorTypes } from './constants'
import { ErrorImpl } from './ErrorImpl'

export class Warning extends ErrorImpl {
  type = ExtendedErrorTypes.WARNING
}

export class Exception extends ErrorImpl {
  type = ExtendedErrorTypes.EXCEPTION
}

export class CriticalError extends ErrorImpl {
  type = ExtendedErrorTypes.CRITICAL
}
