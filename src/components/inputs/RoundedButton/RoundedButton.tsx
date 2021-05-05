import { FC } from 'react'

import { BaseButton, BaseButtonProps } from 'src/components/inputs'
import s from './styles'

const RoundedButton: FC<BaseButtonProps> = ({ style, ...props }) => 
  <BaseButton css={[style, s.rounded]} {...props} />

export default RoundedButton

