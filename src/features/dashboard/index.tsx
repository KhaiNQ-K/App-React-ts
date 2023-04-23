import axiosClient from '@/api/axiosClient'
import { Button } from '@mui/material'
import React, { useEffect } from 'react'

export interface DashboardProps {}

export default function Dashboard() {
  const handleCLick = async () => {
    const res = await axiosClient.get('lookup/companys')
    console.log('res', res)
  }
  return <div>Dashboard</div>
}
