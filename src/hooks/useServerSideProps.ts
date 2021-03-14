import { useContext } from 'react'

import { ServerSidePropsContext } from 'src/components/services'
import { ServerSideProps } from 'src/components/services/ServerSidePropsContext'

export function useServerSideProps(): ServerSideProps {
  return useContext(ServerSidePropsContext)
}
