import { FC, } from 'react'

import { Wrapper } from 'src/components/elements'
import { InteractiveWrapperProps } from './types'
import s from './styles'

const InteractiveWrapper: FC<InteractiveWrapperProps> = ({
  active, style, children, ...props
}) => {
  return (
    <Wrapper css={[s.wrapper, active && s.active, style]} {...props}>{children}</Wrapper>
  )
}

export default InteractiveWrapper
