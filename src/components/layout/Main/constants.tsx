import { PartialRouteObject } from 'react-router'

import {
  CodeSplittingPage, ErrorHandlingPage, HomePage, ModalAndPopupPage,
  NetworkPage, SsrPage, ValidationPage,
} from 'src/components/pages'
import { PageRoutes } from 'src/services/requests'

export const ROUTES: PartialRouteObject[] = [
  {path: PageRoutes.ROOT, element: <HomePage />},
  {path: PageRoutes.CODE_SPLITTING, element: <CodeSplittingPage />},
  {path: PageRoutes.ERROR_HANDLING, element: <ErrorHandlingPage />},
  {path: PageRoutes.MODAL_AND_POPUP, element: <ModalAndPopupPage />},
  {path: PageRoutes.NETWORK, element: <NetworkPage />},
  {path: PageRoutes.SSR, element: <SsrPage />},
  {path: PageRoutes.VALIDATION, element: <ValidationPage />},
]
