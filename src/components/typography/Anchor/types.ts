
import { AnchorHTMLAttributes } from 'react'

import { StyledProps } from 'src/types/styledProps'

export type AnchorProps = StyledProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'>
