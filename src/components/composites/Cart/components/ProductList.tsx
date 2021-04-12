import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { List } from 'src/components/surfaces'
import { StyledProps } from 'src/types'
import { CartModel } from '../models'
import { ProductItem } from './ProductItem'

interface ProductListProps extends StyledProps {
  cart: CartModel,
}

const ProductList: FC<ProductListProps> = ({ cart, className, style }) => {
  return (
    <List className={className} style={style}>
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
