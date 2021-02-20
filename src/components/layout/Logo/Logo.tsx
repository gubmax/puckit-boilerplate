/** @jsx jsx */
import { FC, } from 'react'
import { jsx } from '@emotion/react'

import s from './styles'

const Logo: FC = () => {
  return (
    <span css={s.title}>
      <span>Puc</span>
      <span css={s.highlight}>K</span>
      <span>it</span>
    </span>
  )
}

export default Logo
