import Home from "./Home"
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Sign from "./components/signup/Sign"
import Log from "./components/signup/Log"

const router = createBrowserRouter([
  {path: '/', element:<Sign />},
  {path: '/login', element: <Log/>},
  {path: '/home', element: <Home />}
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
 