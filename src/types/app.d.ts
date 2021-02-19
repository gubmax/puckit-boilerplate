/// <reference types="@puckit/scripts" />

import { SERVER_SIDE_PROPS } from 'src/components/services'

declare global {
  interface Window { SERVER_SIDE_PROPS?: SERVER_SIDE_PROPS }
}
