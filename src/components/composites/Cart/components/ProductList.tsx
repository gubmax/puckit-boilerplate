import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { List } from 'src/components/surfaces'
import { CartModel } from '../models'
import ProductItem from './ProductItem'

interface ProductListProps {
  cart: CartModel,
}

const ProductList: FC<ProductListProps> = ({ cart }) => {
  return (
    <List>
      {cart.goods.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cart={cart}
        />
      ))}
    </List>
  )
}

export default observer(ProductList)
