import { FC } from 'react'

import { Cart } from 'src/components/composite'
import { H1 } from 'src/components/typography'

const StateManagmentPage: FC = () => {
  return (
    <>
      <H1>State Managment</H1>
      <Cart />
    </>
  )
}

export default StateManagmentPage
