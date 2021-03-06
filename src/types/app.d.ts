/// <reference types="@puckit/scripts" />

import { ServerSideProps } from 'src/contexts'

declare global {
  interface Window { SERVER_SIDE_PROPS?: ServerSideProps }
}
