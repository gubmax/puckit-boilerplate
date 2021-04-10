import { StyledProps } from 'src/types/styledProps'
import { HeadingTags } from './constants'

export type HeadingProps = StyledProps & {
  tag: HeadingTags;
}
