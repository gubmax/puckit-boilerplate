import { StyledProps } from 'src/types'
import { HeadingTags } from './constants'

export type HeadingProps = StyledProps & {
  as: HeadingTags;
}
