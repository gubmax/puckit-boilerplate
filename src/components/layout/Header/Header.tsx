import { FC } from 'react'

import { Logo } from 'src/components/layout'
import { LINK_REPO } from './constants'
import s from './styles'

const Header: FC = () => {
  return (
    <div css={s.wrapper}>
      <span css={s.logoWrapper}>Puc<Logo />it Boilerplate</span>
      <a css={s.link} href={LINK_REPO} target="_blank" rel="noreferrer noopener">GitHub</a>
    </div>
  )
}

export default Header
