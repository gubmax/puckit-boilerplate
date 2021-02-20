/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import { Logo } from 'src/components/layout'
import { List } from 'src/components/elements'
import s from './styles'

const Sidebar: FC = () => {
  return (
    <aside css={s.wrapper}>
      <Logo />
      <List tag='ul' css={s.list}>
        <li>About</li>
        <li>Code Splitting</li>
        <li>Network</li>
        <li>Error Handling</li>
        <li>Validation</li>
        <li>Modal and Popup</li>
      </List>
    </aside>
  )
}

export default Sidebar
