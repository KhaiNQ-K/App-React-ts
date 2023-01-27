import theme from '@/theme'
import { Box, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import * as React from 'react'
import bgImage from '@/assets/img/bg-01.jpg'
import { InputField } from '@/components/form/InputField'
import { useForm } from 'react-hook-form'
import { AccountCircle, AccountCircleOutlined, LockOutlined } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const image = bgImage.toString()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const handleFormSubmit = () => {}
  return (
    <Stack
      alignItems="center"
      minHeight="100vh"
      width="100%"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundSize: '100%',
      }}
    >
      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Paper
          elevation={4}
          sx={{
            padding: theme.spacing(6),
            my: theme.spacing(1.5),
            width: '480px',
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            color="#333"
            fontWeight="bold"
            textAlign={'center'}
            mb={theme.spacing(6)}
          >
            Login
          </Typography>
          <Typography>Username</Typography>
          <InputField
            name="username"
            control={control}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ mb: theme.spacing(1) }}>
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
            placeholder="Type your username"
          />
          <Typography>Password</Typography>

          <InputField
            name="password"
            control={control}
            variant="standard"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ mb: theme.spacing(1) }}>
                  <LockOutlined />
                </InputAdornment>
              ),
            }}
            placeholder="Type your password"
          />
          <Box textAlign={'right'}>
            <NavLink to="/forgot-password" style={{ textDecoration: 'none' }}>
              Forgot password?
            </NavLink>
          </Box>
        </Paper>
      </Box>
    </Stack>
  )
}
