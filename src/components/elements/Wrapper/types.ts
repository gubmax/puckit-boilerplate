import { StyledProps } from 'src/types/styledProps';
import { TagProp } from 'src/types/tagProp';

export interface WrapperProps extends StyledProps, TagProp {
  noPadding?: boolean;
}
