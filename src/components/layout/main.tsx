import { LayoutProps } from '@/models'
import * as React from 'react'
export interface MainLayoutProps {
  children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => (
  <div>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </div>
)
