// import { Dashboard } from "@/pages/Dashboard";
import { LoginPage } from "@/features/auth";
import Dashboard from "@/features/dashboard";
import { useRoutes } from "react-router-dom";
import * as React from "react";
import { AdminLayout } from "@/components/layout";
import { Profile } from "@/features/profile";

export function Router() {
  const element = useRoutes([
    { path: "/login", element: <LoginPage /> },
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    { path: "*", element: <LoginPage /> },
  ]);
  return element;
}
