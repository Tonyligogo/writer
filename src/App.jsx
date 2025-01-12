import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Register from "./auth/Register";
import Admin from "./admin/Admin";
import Login from "./auth/Login";
import { Toaster } from "react-hot-toast";
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
    <>
    <RouterProvider router={router} />
    <Toaster position='top-right'/>
    </>
  )
}

export default App