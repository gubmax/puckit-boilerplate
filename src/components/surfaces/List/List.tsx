import { FC, Children } from 'react'

import { Wrapper } from 'src/components/surfaces'
import { ListProps } from './types'
import s from './styles'

const List: FC<ListProps> = ({ className = '', style, as, children }) => {
  return (
    <Wrapper className={className} css={style} as={as} noPadding>
      {Children.map(children, (child, index) => (
        <>
          {!!index && <hr css={s.separator} />}
          {child}
        </>
      ))}
    </Wrapper>
  )
}

export default List
