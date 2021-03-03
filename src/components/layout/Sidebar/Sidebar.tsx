/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'

import { List, IW } from 'src/components/elements'
import { ROUTES } from './constants'
import s from './styles'

const Sidebar: FC = () => {
  const {pathname} = useLocation();

  return (
    <aside css={s.wrapper}>
      <List>
        {ROUTES.map(({to, text}) => {
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
