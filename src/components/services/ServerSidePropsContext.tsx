import { createContext } from 'react'

export type ServerSideProps = any

const ServerSidePropsContext = createContext<ServerSideProps>({})

export default ServerSidePropsContext
