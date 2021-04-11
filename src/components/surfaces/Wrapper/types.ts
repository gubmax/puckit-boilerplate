import { StyledProps, TagProp } from 'src/types'

export interface WrapperProps extends StyledProps, TagProp {
  noPadding?: boolean;
}
