import { createContext } from 'react'

export interface ServerSideProps {
  serverSideMsg?: string;
}

const ServerSidePropsContext = createContext<ServerSideProps>({})

export default ServerSidePropsContext
