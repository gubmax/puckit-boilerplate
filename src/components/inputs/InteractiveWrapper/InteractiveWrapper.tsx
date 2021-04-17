import { FC, } from 'react'

import { Wrapper } from 'src/components/surfaces'
import { noop } from 'src/helpers'
import { InteractiveWrapperProps } from './types'
import s from './styles'

const InteractiveWrapper: FC<InteractiveWrapperProps> = ({
  active, style, children, onClick = noop,
  ...rest
}) => {
  return (
    <Wrapper
      css={[s.wrapper, active && s.active, style]}
      role="link"
      tabIndex={0}
      onClick={onClick}
      {...rest}>
      {children}
    </Wrapper>
  )
}

export default InteractiveWrapper
