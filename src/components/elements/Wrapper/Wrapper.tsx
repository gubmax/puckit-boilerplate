/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import { StyledProps } from 'src/types/styledProps'
import s from './styles'

const Wrapper: FC<StyledProps> = ({ className, style, children }) => {
  return (
    <div css={[s.wrapper, style]} className={className}>{children}</div>
  )
}

export default Wrapper
