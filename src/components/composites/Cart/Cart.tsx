import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { H3 } from 'src/components/typography'
import { ProductList } from './components'
import { CartModel } from './models'
import { MOCK_PRODUCTS } from './constants'
import s from './styles'

const cartModel = new CartModel(MOCK_PRODUCTS)

const Cart: FC = () => {
  const { goods, totalPrice } = cartModel

  const listTemplate = goods.length
    ? <ProductList css={s.list} cart={cartModel} />
    : <H3>Your cart is empty</H3>

  return (
    <section css={s.wrapper}>
      {listTemplate}
      {!!goods.length && <H3>Total price: ${totalPrice}</H3>}
    </section>
  )
}

export default observer(Cart)
