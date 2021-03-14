import { PageRoutes } from 'src/services/requests'

export const ROUTES: Array<{to: PageRoutes, text: string}> = [
  { to: PageRoutes.ROOT, text: 'About' },
  { to: PageRoutes.CODE_SPLITTING, text: 'Code Splitting' },
  { to: PageRoutes.ERROR_HANDLING, text: 'Error Handling' },
  { to: PageRoutes.MODAL_AND_POPUP, text: 'Modal and Popup' },
  { to: PageRoutes.NETWORK, text: 'Network' },
  { to: PageRoutes.SSR, text: 'Server-Side Rendering' },
  { to: PageRoutes.VALIDATION, text: 'Validation' },
]
