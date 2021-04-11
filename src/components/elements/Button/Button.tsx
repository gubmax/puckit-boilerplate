import { FC, memo } from 'react'

import { Loader } from 'src/components/elements'
import { noop } from 'src/helpers'
import { ButtonProps } from './types'
import s from './styles'

const Button: FC<ButtonProps> = ({
  children: text, primary, large, loading,
  style, onClick = noop, ...rest
}) => {
  function handleClick() {
    if (loading) return
    onClick()
  }

  return (
    <button
      css={[
        s.btn,
        primary ? s.primary : s.default,
        large && s.large,
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
