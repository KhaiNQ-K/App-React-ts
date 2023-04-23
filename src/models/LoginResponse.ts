export interface LoginResponse {
  id: string
  access_token: string
  expires: string
  refresh_token: string
  fullName: string
  username: string
  userId: string
  privileges: string[]
}
