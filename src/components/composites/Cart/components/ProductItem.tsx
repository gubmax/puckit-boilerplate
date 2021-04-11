import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { Wrapper } from 'src/components/surfaces'
import { CartModel } from '../models'
import { Product } from '../types'

interface ProductCardProps {
  product: Product,
  cart: CartModel,
}

const ProductCard: FC<ProductCardProps> = ({
  product: { id, title, price, current },
  cart: { update, remove },
}) => {
  return (
    <Wrapper>
      <p>{title}</p>
      <p>Price: {price * current}</p>
      <p>Current: {current}</p>
      <button onClick={() => remove(id)}>x</button>
      <button onClick={() => update(id, current - 1)}>-</button>
      <button onClick={() => update(id, current + 1)}>+</button>
    </Wrapper>
  )
}

export default observer(ProductCard)
