import { ReactElement } from 'react'

import { StyledProps, AsProp } from 'src/types'

export interface ListProps extends StyledProps, AsProp {
  children: ReactElement[],
}
