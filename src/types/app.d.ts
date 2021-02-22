/// <reference types="@puckit/scripts" />

import { ServerSideProps } from 'src/components/services/ServerSidePropsContext'

declare global {
  interface Window { SERVER_SIDE_PROPS?: SERVER_SIDE_PROPS }
}
