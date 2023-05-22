import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";
/** import all components */

/** root routes */
export const routerOfApp = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
