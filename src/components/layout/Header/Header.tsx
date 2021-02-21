/** @jsx jsx */
import { FC, Fragment } from 'react'
import { jsx } from '@emotion/react'

import { Logo } from 'src/components/layout'
import s from './styles'

const Header: FC = () => {
  return (
    <div css={s.wrapper}>
      <span css={s.logoWrapper}>Puc<Logo />it Boilerplate</span>
      <a css={s.link} href="https://github.com/gubmax/puckit-boilerplate" target="_blank" rel="noopener">GitHub</a>
    </div>
  )
}

export default Header
