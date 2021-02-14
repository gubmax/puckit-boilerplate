/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import s from './styles'

const Sidebar: FC = () => {
  return (
    <aside css={s.wrapper}>
      <p css={s.title}>
        <span>Puc</span>
        <span css={s.highlight}>K</span>
        <span>it</span>
      </p>
    </aside>
  )
}

export default Sidebar
