import { CartModel } from '../../models'
import { Product } from '../../types'

export interface ProductItemProps {
  product: Product,
  cart: CartModel,
}
