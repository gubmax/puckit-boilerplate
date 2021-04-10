import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { H2 } from 'src/components/typography'
import { ProductList } from './components'
import { CartModel } from './models'
import { MOCK_PRODUCTS } from './constants'

const cartModel = new CartModel(MOCK_PRODUCTS)

const Cart: FC = () => {
  const { goods, totalPrice } = cartModel

  const listTemplate = goods.length
    ? <ProductList cart={cartModel} />
    : <p>No goods</p>

  return (
    <>
      <H2>Cart</H2>
      {listTemplate}
      <p>Total price: {totalPrice}</p>
    </>
  )
}

export default observer(Cart)
