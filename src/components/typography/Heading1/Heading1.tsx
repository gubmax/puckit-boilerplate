/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import { Heading1Props } from './types'
import s from './styles'

const Heading1: FC<Heading1Props> = ({
  tag: Tag = 'h1', className = '', style, children,
}) => {
  return (
    <Tag css={[s.title, style]} className={className}>{children}</Tag>
  )
}

export default Heading1
