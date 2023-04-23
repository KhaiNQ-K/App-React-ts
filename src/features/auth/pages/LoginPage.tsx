import theme from '@/theme'
import { Box, Button, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import * as React from 'react'
import bgImage from '@/assets/img/bg-01.jpg'
import { InputField } from '@/components/form/InputField'
import { useForm } from 'react-hook-form'
import {
  AccountCircle,
  AccountCircleOutlined,
  FacebookRounded,
  Google,
  LockOutlined,
  Twitter,
} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import Facebook from '@mui/icons-material/Facebook'
import { LoginPayload } from '@/models'
import { useAppDispatch } from '@/app/hooks'
import { authActions } from '../authSlice'
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const dispatch = useAppDispatch()
  const image = bgImage.toString()
  const { handleSubmit, control } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const handleSubmitForm = (data: LoginPayload) => {
    dispatch(authActions.login(data))
  }
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
      <Box component="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Paper
          elevation={1}
          sx={{
            padding: theme.spacing(6),
            my: theme.spacing(1.5),
            width: '500px',
            borderRadius: theme.spacing(1),
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
            style={{ paddingBottom: theme.spacing(3) }}
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
          <Box textAlign={'right'} sx={{ paddingBottom: theme.spacing(4) }}>
            <NavLink to="/forgot-password" style={{ textDecoration: 'none' }}>
              Forgot password?
            </NavLink>
          </Box>
          <Box
            position={'relative'}
            width={'100%'}
            borderRadius={theme.spacing(3)}
            zIndex={1}
            m={'0 auto'}
            overflow={'hidden'}
          >
            <Box
              position={'absolute'}
              zIndex={-1}
              width={'300%'}
              height={'100%'}
              sx={{
                background: '-webkit-linear-gradient(right,#00dbde,#fc00ff,#00dbde,#fc00ff)',
                transition: 'all 0.4s',
              }}
              top={0}
              left={'-100%'}
            ></Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                color: '#fff',
                padding: '0 20px',
                height: '50px',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                fontSize: theme.spacing(2),
              }}
            >
              Login
            </Button>
          </Box>
          <Typography margin={' 54px 0 20px'} textAlign={'center'}>
            Or Sign Up Using
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={theme.spacing(1)}
          >
            <NavLink to="" style={{}}>
              <FacebookRounded style={{ fontSize: theme.spacing(6) }} />
            </NavLink>
            <NavLink to="" style={{ color: 'blue' }}>
              <Twitter style={{ fontSize: theme.spacing(6) }} />
            </NavLink>
            <NavLink to="" style={{ color: 'red' }}>
              <Google style={{ fontSize: theme.spacing(6) }} />
            </NavLink>
          </Box>
          <Box textAlign={'center'} pt={theme.spacing(10)}>
            <Typography>Or Sign Up Using</Typography>
            <NavLink
              to=""
              style={{
                textDecoration: 'none',
                textTransform: 'uppercase',
                marginTop: theme.spacing(2),
                display: 'block',
              }}
            >
              Sign up
            </NavLink>
          </Box>
        </Paper>
      </Box>
    </Stack>
  )
}
