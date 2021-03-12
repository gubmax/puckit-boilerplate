/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'
import { useRoutes } from 'react-router-dom'

import { Header, Sidebar } from 'src/components/layout'
import { ROUTES } from './constants'
import s from './styles'

const Main: FC = () => {
  const element = useRoutes(ROUTES)

  return (
    <div css={s.page}>
      <Header />
      <Sidebar />
      <main css={s.main}>
        {element}
      </main>
    </div>
  )
}

export default Main
