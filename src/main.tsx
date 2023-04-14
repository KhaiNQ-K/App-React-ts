import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import history from './utils/history'
import { CustomBrowserRouter } from '@/components/common'
import { useMode } from './hooks/useMode'
import { ColorModeContext } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <CustomBrowserRouter history={history}>
        <CssBaseline />
        <App />
      </CustomBrowserRouter>
    </React.StrictMode>
  </Provider>,
)
