import './App.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'


const router = createBrowserRouter([
  {path: '/' , element: <Home />},
  {path: '/loginscreen' , element: <LoginScreen />},
  {path: '/resetpassword' , element: <ResetPassword />},
  {path: '/forgotpassword' , element: <ForgotPassword />}
])

function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
