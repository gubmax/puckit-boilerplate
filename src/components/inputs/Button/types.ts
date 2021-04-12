import { ButtonHTMLAttributes } from 'react'

import { StyledProps } from 'src/types'

export interface ButtonProps extends StyledProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  large?: boolean,
  loading?: boolean,
  primary?: boolean,
  rounded?: boolean,
  onClick?: () => void,
}
