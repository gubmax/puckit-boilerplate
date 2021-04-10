import { FC } from 'react'

import { HeadingProps } from './types'
import { HeadingTags, stylesByTag } from './constants'
import { StyledProps } from 'src/types/styledProps'

const Heading: FC<HeadingProps> = ({
  tag: Tag, className = '', style, children,
}) => {
  return (
    <Tag css={[stylesByTag.get(Tag), style]} className={className}>{children}</Tag>
  )
}

export const H1: FC<StyledProps> = ({ ...props }) => <Heading {...props} tag={HeadingTags.H1} />
export const H2: FC<StyledProps> = ({ ...props }) => <Heading {...props} tag={HeadingTags.H2} />
