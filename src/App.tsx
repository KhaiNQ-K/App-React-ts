import { useState } from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
import { AdminLayout, MainLayout } from "@/components/layout";
import { Router } from "./routes";
import Dashboard from "./features/dashboard";
import { Profile } from "./features/profile";

function App() {
  const [count, setCount] = useState(0);
  return <Router />;
}

export default App;
