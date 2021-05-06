import { FC } from 'react'

import { Loader } from 'src/components/elements'
import { BaseButton } from 'src/components/inputs'
import { noop } from 'src/helpers'
import { ButtonProps } from './types'
import s from './styles'

const Button: FC<ButtonProps> = ({
  children, large, loading, style,
  onClick = noop, ...rest
}) => {
  function handleClick() {
    if (loading) return
    onClick()
  }

  return (
    <BaseButton css={[large && s.large, style]} onClick={handleClick} {...rest}>
      {loading ? <Loader small /> : children}
    </BaseButton>
  )
}

export default Button
