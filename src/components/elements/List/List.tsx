import {FC, Children} from 'react'

import { Wrapper } from 'src/components/elements'
import { ListProps } from './types'
import s from './styles'

const List: FC<ListProps> = ({ className = '', style, tag, children }) => {
  return (
    <Wrapper className={className} css={style} tag={tag} noPadding>
      {
        Children.map(children, (child, index) => (
          <>
            {child}
            {index !== children.length - 1 && <hr css={s.separator} />}
          </>
        ))
      }
    </Wrapper>
  )
}

export default List
