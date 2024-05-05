import Home from "./components/main/Home"
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Sign from "./components/signup/Sign"
import Log from "./components/signup/Log"
import ForgotPassword from "./components/signup/ForgotPassword"

const router = createBrowserRouter([
  {path: '/', element:<Sign />},
  {path: '/login', element: <Log/>},
  {path: '/home', element: <Home />},
  {path: '/forgot', element: <ForgotPassword />},
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
 