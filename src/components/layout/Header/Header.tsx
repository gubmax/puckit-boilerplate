/** @jsx jsx */
import { FC, Fragment } from 'react'
import { jsx } from '@emotion/react'

import { Logo } from 'src/components/layout'
import s from './styles'

const Header: FC = () => {
  return (
    <div css={s.wrapper}>
      <span>Puc<Logo />it Boilerplate</span>
    </div>
  )
}

export default Header
