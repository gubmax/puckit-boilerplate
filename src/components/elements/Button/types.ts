import { ButtonHTMLAttributes } from 'react'

import { StyledProps } from 'src/types/styledProps'

export interface ButtonProps extends StyledProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children: string,
  primary?: boolean,
  large?: boolean,
  loading?: boolean,
  onClick?: () => void,
}
