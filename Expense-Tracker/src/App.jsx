import './App.css'
import Home from './Home'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'


const router = createBrowserRouter([
  {path: '/' , element: <Home />},
  {path: '/loginscreen' , element: <LoginScreen/>}
])

function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
