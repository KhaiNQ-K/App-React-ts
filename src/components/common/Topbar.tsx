import { Menu as MenuIcon } from '@mui/icons-material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import React, { ReactNode, useState } from 'react'
import { Outlet } from 'react-router-dom'

export interface TopbarProps {}

export function Topbar(props: TopbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isMenuClose, setIsMenuClose] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleProfileMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const isMenuOpen = Boolean(anchorEl)
  return <>Topbar</>
}
