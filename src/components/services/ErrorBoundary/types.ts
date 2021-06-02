import { ReactNode } from 'react'
import { ErrorImpl } from 'src/utils/errors'

import { ErrorLevels } from './constants'

export interface ErrorBoundaryProps {
  error?: unknown,
  level?: ErrorLevels,
  fallback?(error: ErrorImpl): ReactNode, 
  onError?(error: Error): void,
}

export interface ErrorBoundaryState {
  error?: unknown,
}
