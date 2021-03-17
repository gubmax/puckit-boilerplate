import { FC } from 'react'

import { Logo } from 'src/components/layout'
import { A } from 'src/components/typography'
import { LINK_REPO } from './constants'
import s from './styles'

const Header: FC = () => {
  return (
    <div css={s.wrapper}>
      <span css={s.logoWrapper}>Puc<Logo />it Boilerplate</span>
      <A href={LINK_REPO} target="_blank" rel="noreferrer noopener">GitHub</A>
    </div>
  )
}

export default Header
