import { Box, Grid, useMediaQuery } from '@mui/material'
import { Sidebar, Topbar } from '@/components/common'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export function AdminLayout() {
  const isNonMobile = useMediaQuery('(min-width:600px)')
  // const {data} = useSelector((state) => state.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  const handleCloseSidebar = (value: boolean) => {
    setIsDrawerOpen(value)
  }
  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      <Sidebar
        drawerWidth="250px"
        isNonMobile={false}
        isSidebarOpen={isDrawerOpen}
        onClose={handleCloseSidebar}
      />
      <Box>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  )
}
