import { useContext } from 'react'

import { ServerSidePropsContext } from 'src/components/services'
import { ServerSideProps } from 'src/components/services/ServerSidePropsContext'

export function useServerSideProps<T extends ServerSideProps>(): T {
  return useContext<T>(ServerSidePropsContext)
}
