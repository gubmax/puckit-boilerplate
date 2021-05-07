import { PartialRouteObject } from 'react-router'

import {
  CodeSplittingPage, ErrorHandlingPage, FormsPage, HomePage,
  ModalAndPopupPage, NetworkPage, SsrPage, StateManagmentPage,
} from 'src/components/pages'
import { PageRoutes } from 'src/services/http'

export const ROUTES: PartialRouteObject[] = [
  { path: PageRoutes.ROOT, element: <HomePage /> },
  { path: PageRoutes.FORMS, element: <FormsPage /> },
  { path: PageRoutes.STATE_MANAGMENT, element: <StateManagmentPage /> },
  { path: PageRoutes.SSR, element: <SsrPage /> },
  { path: PageRoutes.CODE_SPLITTING, element: <CodeSplittingPage /> },
  { path: PageRoutes.NETWORK, element: <NetworkPage /> },
  { path: PageRoutes.ERROR_HANDLING, element: <ErrorHandlingPage /> },
  { path: PageRoutes.MODAL_AND_POPUP, element: <ModalAndPopupPage /> },
]
