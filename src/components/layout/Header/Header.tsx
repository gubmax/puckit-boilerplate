import { FC } from 'react'

import { Logo } from 'src/components/elements'
import { A, H2 } from 'src/components/typography'
import { LINK_REPO } from './constants'
import s from './styles'

const Header: FC = () => {
  return (
    <div css={s.wrapper}>
      <H2 css={s.logoWrapper}>Puc<Logo />it Boilerplate</H2>
      <A href={LINK_REPO} target="_blank" rel="noreferrer noopener">GitHub</A>
    </div>
  )
}

export default Header
