import { PageRoutes } from 'src/services/http'

export const ROUTES: Array<{to: PageRoutes, text: string}> = [
  { to: PageRoutes.ROOT, text: 'About' },
  { to: PageRoutes.FORMS, text: 'Forms' },
  { to: PageRoutes.STATE_MANAGMENT, text: 'State Managment' },
  { to: PageRoutes.CODE_SPLITTING, text: 'Code Splitting' },
  { to: PageRoutes.ERROR_HANDLING, text: 'Error Handling' },
  { to: PageRoutes.MODAL_AND_POPUP, text: 'Modal and Popup' },
  { to: PageRoutes.NETWORK, text: 'Network' },
  { to: PageRoutes.SSR, text: 'Server-Side Rendering' },
]
