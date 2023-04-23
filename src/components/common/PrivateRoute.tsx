import { selectCurrentUser } from '@/features/auth/authSlice'
import { User } from '@/models'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export interface PrivateRouteProps {
  allowedRoles: string[]
}

export function PrivateRoute({ allowedRoles }: PrivateRouteProps) {
  const currentUser: User = useSelector(selectCurrentUser)

  const isAllowedRoles = currentUser.roles.find((role) => allowedRoles?.includes(role))
  return isAllowedRoles ? <Outlet /> : <Navigate to="*" state={{ from: location }} replace />
}
