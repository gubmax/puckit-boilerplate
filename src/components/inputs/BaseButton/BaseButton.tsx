import { FC } from 'react'

import { BaseButtonProps } from './types'
import s from './styles'

const BaseButton: FC<BaseButtonProps> = ({
  children, primary, style, ...rest
}) => {
  return (
    <button css={[s.btn, primary ? s.primary : s.default, style]} {...rest}>
      {children}
    </button>
  )
}

export default BaseButton
