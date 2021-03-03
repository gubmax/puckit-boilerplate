/** @jsx jsx */
import { FC, memo } from 'react'
import { jsx } from '@emotion/react'

import { LoaderProps } from './types'
import s from './styles'

const Loader: FC<LoaderProps> = ({ small, secondary, className = '', style }) => {
  return (
    <span css={[s.loader, style]} className={className}>
      <span css={[s.spinner, small && s.spinnerSmall, secondary && s.spinnerSecondary]} />
    </span>
  )
}

export default memo(Loader)
