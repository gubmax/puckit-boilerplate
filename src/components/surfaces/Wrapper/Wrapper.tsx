import { FC } from 'react'

import { noop } from 'src/helpers'
import { WrapperProps } from './types'
import s from './styles'

const Wrapper: FC<WrapperProps> = ({
  tag: Tag = 'div', className = '', style, children,
  noPadding, onClick = noop, ...rest
}) => {
  return (
    <Tag
      css={[s.wrapper, !noPadding && s.padding, style]}
      className={className}
      onClick={onClick}
      onKeyPress={onClick}
      {...rest}>
      {children}
    </Tag>
  )
}

export default Wrapper
