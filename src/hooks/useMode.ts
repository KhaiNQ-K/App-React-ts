import { themeSettings } from '@/theme'
import { PaletteMode, createTheme } from '@mui/material'
import { useMemo, useState } from 'react'

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((preMode: PaletteMode) => (preMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, colorMode] as const
}
