import React, { ReactNode, useLayoutEffect, useState } from 'react'
import { BrowserHistory } from 'history'
import { Router } from 'react-router-dom'
export interface CustomBrowserRouterProps {
  basename?: string
  children: ReactNode
  history: BrowserHistory
}

export function CustomBrowserRouter({ basename, children, history }: CustomBrowserRouterProps) {
  const [state, setState] = useState({ action: history.action, location: history.location })
  useLayoutEffect(() => history.listen(setState), [history])
  return (
    <Router
      basename={basename}
      navigator={history}
      navigationType={state.action}
      location={state.location}
    >
      {children}
    </Router>
  )
}
