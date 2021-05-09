import { makeAutoObservable } from 'mobx'

export class CounterModel {
  counter = 0

  constructor() {
    makeAutoObservable(this)
  }

  increase = (): void => {
    this.counter++
  }
}
