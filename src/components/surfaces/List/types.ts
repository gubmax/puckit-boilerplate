import { ReactElement } from 'react'

import { StyledProps, TagProp } from 'src/types'

export interface ListProps extends StyledProps, TagProp {
  children: ReactElement[],
}
