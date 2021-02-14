/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import s from './styles'
import { StyledProps } from '../../../types/styledProps'

export const Wrapper: FC<StyledProps> = ({ className, style, children }) => {
  return (
    <div css={[s.wrapper, style]} className={className}>{children}</div>
  )
}

export default Wrapper
