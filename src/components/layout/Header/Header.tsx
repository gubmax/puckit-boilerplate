/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import s from './styles'

const Header: FC = () => {
  return (
    <div css={s.wrapper}>Some page title</div>
  )
}

export default Header
