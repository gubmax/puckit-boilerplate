/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import s from './styles'

const Header: FC = () => {
  return (
    <div css={s.wrapper}>Puckit Boilerplate</div>
  )
}

export default Header
