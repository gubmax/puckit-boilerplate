import { useContext } from 'react'

import { ServerSidePropsContext } from '../components/services'
import { ServerSideProps } from '../components/services/ServerSidePropsProvider'

export function useServerSideProps<T extends ServerSideProps>(): T {
  return useContext<T>(ServerSidePropsContext)
}
