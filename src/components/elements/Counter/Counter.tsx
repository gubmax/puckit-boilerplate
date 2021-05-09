import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { useInit } from 'src/hooks'
import { RoundedButton } from 'src/components/inputs'
import { CounterModel } from './models'
import s from './styles'

const Counter: FC = () => {
  const { counter, increase } = useInit(() => new CounterModel())

  return (
    <div css={s.wrapper}>
      <RoundedButton onClick={increase}>+</RoundedButton>
      <span css={s.counter}>{counter}</span>
    </div>
  )
}

export default observer(Counter)
