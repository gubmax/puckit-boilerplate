import { useContext } from 'react'
import { BrowserHistory } from 'history'

import { HistoryContext } from 'src/components/services'

export const useHistory = (): BrowserHistory | Record<string, never> => useContext(HistoryContext)
