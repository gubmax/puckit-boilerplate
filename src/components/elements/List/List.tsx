/** @jsx jsx */
import {FC, Children, Fragment, ReactElement} from 'react'
import { jsx } from '@emotion/react'

import { Wrapper } from 'src/components/elements'
import { ListProps } from './types'
import s from './styles'

const List: FC<ListProps> = ({ className = '', style, tag, children }) => {
  const withStyles = (child: ReactElement) => jsx(child.type, {
      key: child.key,
      ...child.props,
      css: [s.listItem, child.props.className],
  })

  return (
    <Wrapper className={className} css={style} tag={tag}>
      {
        Children.map(children, (child, index) => (
          <Fragment>
            {withStyles(child)}
            {index !== children.length - 1 && <hr css={s.separator} />}
          </Fragment>
        ))
      }
    </Wrapper>
  )
}

export default List
