import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Register from "./auth/Register";
import Admin from "./admin/Admin";
import Login from "./auth/Login";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/writer/admin",
      element: <Admin />,
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App