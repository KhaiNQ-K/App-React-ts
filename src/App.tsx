import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { routes } from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
