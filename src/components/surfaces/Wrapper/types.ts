import { HTMLAttributes } from 'react'
import { StyledProps, TagProp } from 'src/types'

export interface WrapperProps extends StyledProps, TagProp, Omit<HTMLAttributes<unknown>, 'style'> {
  noPadding?: boolean;
  onClick?(): void; 
}
