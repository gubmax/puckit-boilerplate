import { useContext } from 'react'

import { ServerSidePropsContext } from 'src/components/services'
import { ServerSideProps } from 'src/components/services/ServerSidePropsProvider'

export function useServerSideProps<T extends ServerSideProps>(): T {
  return useContext<T>(ServerSidePropsContext)
}
