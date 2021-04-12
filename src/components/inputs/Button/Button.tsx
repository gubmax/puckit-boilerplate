import { FC, memo } from 'react'

import { Loader } from 'src/components/elements'
import { noop } from 'src/helpers'
import { ButtonProps } from './types'
import s from './styles'

const Button: FC<ButtonProps> = ({
  children: text, large, loading, primary,
  rounded, style, onClick = noop, ...rest
}) => {
  function handleClick() {
    if (loading) return
    onClick()
  }

  return (
    <button
      css={[
        s.btn,
        large && s.large,
        primary ? s.primary : s.default,
        rounded && s.rounded,
        style,
      ]}
      onClick={handleClick}
      {...rest}
    >
      {loading ? <Loader small /> : text}
    </button>
  )
}

export default memo(Button)
