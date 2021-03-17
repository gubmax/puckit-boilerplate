import { FC } from 'react'

import { AnchorProps } from './types'
import s from './styles'

const Anchor: FC<AnchorProps> = ({
  className = '', style, children, ...rest
}) => {
  return (
    <a css={[s.link, style]} className={className} {...rest}>{children}</a>
  )
}

export default Anchor
