/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import s from './styles'

const Sidebar: FC = () => {
  return (
    <aside css={s.wrapper}>
      <p css={s.title}>Puckit Boilerplate</p>
    </aside>
  )
}

export default Sidebar
