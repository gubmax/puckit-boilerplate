import { ErrorImplementation } from 'src/modules/error'
import { ExtendedErrorTypes } from './constants'

export class Warning extends ErrorImplementation {
  type = ExtendedErrorTypes.WARNING
}

export class Exception extends ErrorImplementation {
  type = ExtendedErrorTypes.EXCEPTION
}

export class CriticalError extends ErrorImplementation {
  type = ExtendedErrorTypes.CRITICAL
}
