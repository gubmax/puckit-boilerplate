import { FC } from 'react'

import { H1 } from 'src/components/typography'
import { WorkInProgressMsg } from 'src/components/elements'

const HomePage: FC = () => {
  return (
    <>
      <H1>About</H1>
      <WorkInProgressMsg />
    </>
  )
}

export default HomePage
