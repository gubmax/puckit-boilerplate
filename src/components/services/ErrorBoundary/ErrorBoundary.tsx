import { Component, ReactNode } from 'react'

import { noop } from 'src/helpers'
import { ErrorImpl, SevereError } from 'src/utils/errors'
import { ErrorLevels } from './constants'

import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidUpdate(): void {
    const {
      props: { error: errorProp, level = ErrorLevels.SEVERE },
      state: { error = errorProp },
    } = this

    if (error instanceof ErrorImpl && error.level > level) throw error
  }

  componentDidCatch(error: Error): void {
    const { onError = noop } = this.props
    onError(error)
  }

  render(): ReactNode {
    const {
      props: { error: errorProp, children, fallback = () => null },
      state: { error = errorProp },
    } = this

    if (error === undefined) return children

    return fallback(
      error instanceof ErrorImpl
        ? error
        : new SevereError({
          message: error instanceof Error ? error.message : '',
        })
    )
  }
}

export default ErrorBoundary
