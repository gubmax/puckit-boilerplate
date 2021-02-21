/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

import { Logo } from 'src/components/layout'
import { List, IW } from 'src/components/elements'
import s from './styles'

const Sidebar: FC = () => {
  return (
    <aside css={s.wrapper}>
      <Logo />
      <List tag='ul' css={s.list}>
        <IW tag="li" active>About</IW>
        <IW tag="li">Code Splitting</IW>
        <IW tag="li">Network</IW>
        <IW tag="li">Error Handling</IW>
        <IW tag="li">Validation</IW>
        <IW tag="li">Modal and Popup</IW>
      </List>
    </aside>
  )
}

export default Sidebar
