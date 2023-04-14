import { ThemeProvider } from '@mui/material'
import { useState } from 'react'
import { useMode } from './hooks/useMode'
import { Router } from './routes'
import { ColorModeContext } from './theme'

function App() {
  const [theme, colorMode] = useMode()
  return (
    <div className="app">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  )
}

export default App
