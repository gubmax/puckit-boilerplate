import { createContext, useRef, useState, useLayoutEffect, FC } from 'react'
import { Router } from 'react-router-dom'
import { BrowserHistory, createBrowserHistory } from 'history'

export const HistoryContext = createContext<BrowserHistory | Record<string, never>>({})

const BrowserRouter: FC = ({ children }) => {
  const { current: history } = useRef(createBrowserHistory({ window }))
  const [{ action, location }, setHistory] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setHistory), [history])

  return (
    <Router action={action} location={location} navigator={history}>
      <HistoryContext.Provider value={history}>
        {children}
      </HistoryContext.Provider>
    </Router>
  )
}

export default BrowserRouter
