import { LoginPayload, LoginResponse } from '@/models'
import history from '@/utils/history'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import dayjs from 'dayjs'
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    debugger
    // Do something before request is sent
    const authTokens: LoginResponse = JSON.parse(localStorage.getItem('app_token') || 'null')
    if (authTokens) {
      config.headers.Authorization = `Bearer ${authTokens.access_token}`
    }
    return config
  },
  async function (error) {
    // Do something with request error

    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  async function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { response, config } = error
    if (response && response.status === 401) {
      const authTokens: LoginResponse = JSON.parse(localStorage.getItem('app_token') || 'null')
      if (!authTokens.refresh_token || !authTokens) {
        localStorage.clear()
        history.push('/login')
      }
      try {
        const payload: LoginPayload = {
          client_id: import.meta.env.VITE_CLIENT_ID,
          client_secret: import.meta.env.VITE_CLIENT_SECRET,
          grant_type: 'refresh_token',
          refresh_token: authTokens.refresh_token,
        }
        const response: LoginResponse = await axiosClient.post('token/auth', payload)
        localStorage.setItem('app_token', JSON.stringify(response))
        if (config?.headers.Authorization !== undefined) {
          config.headers.Authorization = `Bearer ${response.access_token}`
          return axiosClient.request(config)
        }
      } catch (error) {
        localStorage.clear()
        history.push('/login')
      }
    }
    // Do something with response error
    return Promise.reject(error)
  },
)
export default axiosClient
