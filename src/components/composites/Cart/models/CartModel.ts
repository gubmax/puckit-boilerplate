import { makeAutoObservable } from 'mobx'

import { Product } from '../types'

export class CartModel {
  goods: Product[]

  constructor(goods: Product[] = []) {
    this.goods = goods
    makeAutoObservable(this)
  }

  get totalPrice(): number {
    return this.goods.reduce((total, { price, current }) => total + price * current, 0)
  }

  update = (id: string, newCurrent: number): void => {
    const product = this.goods.find((product) => product.id === id)
    if (!product) return
    product.current = [1, newCurrent, 10].sort((a, b) => a - b)[1]
  }

  remove = (id: string): void => {
    this.goods = this.goods.filter((product) => product.id !== id)
  }
}
