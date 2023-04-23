import { LoginPayload } from '@/models'
import axiosClient from './axiosClient'

const authApi = {
  login(payload: LoginPayload) {
    const url = '/token/auth'
    payload.client_id = import.meta.env.VITE_CLIENT_ID
    payload.client_secret = import.meta.env.VITE_CLIENT_SECRET
    payload.grant_type = 'password'
    return axiosClient.post(url, payload)
  },
}
export default authApi
