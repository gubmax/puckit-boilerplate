import { FC, useCallback } from 'react'
import { observer } from 'mobx-react-lite'

import { Button, RoundedButton } from 'src/components/inputs'
import { Wrapper } from 'src/components/surfaces'
import { H3 } from 'src/components/typography'
import { ProductItemProps } from './types'
import s from './styles'

const ProductItem: FC<ProductItemProps> = ({
  product: { id, title, price, current },
  cart: { update, remove },
}) => {
  const increase = useCallback(() => update(id, current + 1), [current, id, update])
  const decrease = useCallback(() => update(id, current - 1), [current, id, update])
  const removeItem = useCallback(() => remove(id), [id, remove])

  return (
    <Wrapper css={s.wrapper}>
      <i css={s.imageBox} />
      <div css={s.body}>
        <div css={s.wrapper}>
          <H3 css={s.marginRight}>{title}</H3>
          <span css={s.price}>${price * current}</span>
        </div>
        <div css={s.wrapper}>
          <Button css={s.marginRight} onClick={removeItem}>Delete</Button>
          <RoundedButton primary onClick={decrease}>-</RoundedButton>
          <span css={s.counter}>{current}</span>
          <RoundedButton primary onClick={increase}>+</RoundedButton>
        </div>
      </div>
    </Wrapper>
  )
}

export default observer(ProductItem)
