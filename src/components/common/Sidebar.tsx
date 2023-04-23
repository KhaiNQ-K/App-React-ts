import { User } from '@/models'
import { Box, Drawer, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'
import { FlexBetween } from './FlexBetween'
import { ChevronLeft } from '@mui/icons-material'

export interface SidebarProps {
  drawerWidth: string
  isSidebarOpen: boolean
  onClose: (isClose: boolean) => void
  isNonMobile: boolean
}

export function Sidebar({ drawerWidth, isNonMobile, isSidebarOpen, onClose }: SidebarProps) {
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => onClose(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: 'secondary.200',
              backgroundColor: 'background.alt',
              boxSixing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m={'1.5rem 2rem 2rem 3rem'}>
              <FlexBetween color="secondary.main">
                <Box>
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => onClose(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}
