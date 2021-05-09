import { FC } from 'react'

import { Cart } from 'src/components/composites'
import { H1, H2 } from 'src/components/typography'
import { Separator } from 'src/components/surfaces'
import { Counter } from 'src/components/elements'

const StateManagmentPage: FC = () => {
  return (
    <>
      <H1>State Managment</H1>
      <H2>Counter</H2>
      <Counter />
      <Separator />
      <H2>Shopping Cart</H2>
      <Cart />
    </>
  )
}

export default StateManagmentPage
