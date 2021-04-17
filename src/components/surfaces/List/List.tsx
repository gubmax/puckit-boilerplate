import { FC, Children } from 'react'

import { Wrapper } from 'src/components/surfaces'
import { ListProps } from './types'
import s from './styles'

const List: FC<ListProps> = ({ className = '', style, tag, children }) => {
  return (
    <Wrapper className={className} css={style} tag={tag} noPadding>
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
