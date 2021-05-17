import { createContext } from 'react'

export interface ServerSideProps {
  serverSideMsg?: string;
}

export const ServerSidePropsContext = createContext<ServerSideProps>({})
