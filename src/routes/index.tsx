import { AdminLayout } from '@/components/layout'

// import { Dashboard } from "@/pages/Dashboard";
import { LoginPage } from '@/features/auth'
import Dashboard from '@/features/dashboard'
import { useRoutes } from 'react-router-dom'
import * as React from 'react'
import { Profile } from '@/features/profile'
import { PrivateRoute } from '@/components/common'
import { ListPage, AddEditPage } from '@/features/user'
export function Router() {
  const element = useRoutes([
    {
      element: <AdminLayout />,
      children: [
        {
          // element: <PrivateRoute allowedRoles={['']}/>,
          children: [
            {
              path: '',
              element: <Dashboard />,
            },
          ],
        },
        // {
        //   element: <PrivateRoute allowedRoles={['ViewUser', 'ManageUser']} />,
        //   children: [
        //     {
        //       path: '/users',
        //       children: [
        //         {
        //           path: '',
        //           element: <ListPage />,
        //         },
        //         {
        //           path: '/create',
        //           element: <AddEditPage />,
        //         },
        //         {
        //           path: '/:id',
        //           element: <AddEditPage />,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   // element: <PrivateRoute allowedRoles={['ViewCompany']} />,
    //   // children: [
    //   //   {
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: '/',
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: '/profile',
    //       element: <Profile />,
    //     },
    //   ],
    //   //   },
    //   // ],
    // },
    // { path: '*', element: <div>Not found</div> },
  ])
  return element
}
// export * from './Routes'
