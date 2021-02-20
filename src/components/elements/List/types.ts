import { ReactElement } from 'react'

import { StyledProps } from 'src/types/styledProps';
import { TagProp } from 'src/types/tagProp';

export interface ListProps extends StyledProps, TagProp {
  children: ReactElement[],
}
