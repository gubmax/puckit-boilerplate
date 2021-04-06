import { FC } from 'react'
import { observer } from 'mobx-react-lite'

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
      <p>Cart</p>
      {listTemplate}
      <p>Total price: {totalPrice}</p>
    </>
  )
}

export default observer(Cart)
