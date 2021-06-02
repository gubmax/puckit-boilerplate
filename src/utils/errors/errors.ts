import { ErrorLevels } from 'src/components/services'
import { ExtendedErrors } from './constants'
import { ErrorImpl } from './ErrorImpl'

export class Warning extends ErrorImpl {
  type = ExtendedErrors.WARNING
  level = ErrorLevels.WARNING
}

export class SevereError extends ErrorImpl {
  type = ExtendedErrors.SEVERE
  level = ErrorLevels.SEVERE
}

export class FatalError extends ErrorImpl {
  type = ExtendedErrors.FATAL
  level = ErrorLevels.FATAL
}
