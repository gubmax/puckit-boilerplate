/** @jsx jsx */
import { FC, } from 'react'
import { jsx } from '@emotion/react'

import { WrapperProps } from './types'
import s from './styles'

const Wrapper: FC<WrapperProps> = ({
  tag: Tag = 'div', className = '', style, children,
  noPadding
}) => {
  return (
    <Tag css={[s.wrapper, !noPadding && s.padding, style]} className={className}>{children}</Tag>
  )
}

export default Wrapper
