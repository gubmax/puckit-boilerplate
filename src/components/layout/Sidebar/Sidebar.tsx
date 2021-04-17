import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { List } from 'src/components/surfaces'
import { IW } from 'src/components/inputs'
import { ROUTES } from './constants'
import s from './styles'

const Sidebar: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside css={s.wrapper}>
      <List>
        {ROUTES.map(({ to, text }) => (
          <IW key={to} active={to === pathname} onClick={() => navigate(to)}>{text}</IW>
        ))}
      </List>
    </aside>
  )
}

export default Sidebar
