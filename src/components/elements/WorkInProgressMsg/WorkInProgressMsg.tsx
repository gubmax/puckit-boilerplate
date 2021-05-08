import { FC } from 'react'

import s from './styles'

const WorkInProgressMsg: FC = () => {
  return (
    <>
      <span css={s.title}>Work</span>
      <p css={s.text}>in progress</p>
    </>
  )
}

export default WorkInProgressMsg
