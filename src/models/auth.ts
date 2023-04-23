export interface LoginPayload {
  client_id: string
  client_secret: string
  grant_type: 'password' | 'refresh_token' | 'invalidate_token'
  username?: string
  password?: string
  refresh_token?: string
}
