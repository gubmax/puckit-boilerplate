import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { List } from 'src/components/surfaces'
import { IW } from 'src/components/inputs'
import { ROUTES } from './constants'
import s from './styles'

const Sidebar: FC = () => {
  const { pathname } = useLocation()

  return (
    <aside css={s.wrapper}>
      <List>
        {ROUTES.map(({ to, text }) => {
          return (
            <Link key={to} to={to}>
              <IW active={to === pathname}>{text}</IW>
            </Link>
          )
        })}
      </List>
    </aside>
  )
}

export default Sidebar
