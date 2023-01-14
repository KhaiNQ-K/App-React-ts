import { AdminLayout, EmptyLayout, MainLayout } from "@/components/layout";
import { LoginPage } from "@/features/auth";
import { Route } from "@/models";
import { Dashboard } from "@/pages/Dashboard";

export const routes: Route[] = [
  {
    path: "",
    component: Dashboard,
    layout: AdminLayout,
  },
  {
    path: "/login",
    component: LoginPage,
    layout: EmptyLayout,
  },
];
