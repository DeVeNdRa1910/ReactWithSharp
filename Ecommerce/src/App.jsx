import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import About from './Components/about/About'
import Home from './Home'
import Music from './Components/Music/Music'
import ContactUs from './Components/ContactUs/ContactUs'
import { AuthContextProvider } from './store/AuthContext'
import AuthForm from './Components/Auth/AuthForm'
import UserProfile from './Components/Profile/UserProfile'

const router = createBrowserRouter([
  {path: '/about', element: <About />},
  {path: '/home', element: <Home />},
  {path: '/music', element: <Music />},
  {path: '/contactUs', element: <ContactUs />},
  {path: '/', element: <AuthForm />},
  {path: '/profile', element: <UserProfile />},
])



// this is another way to create routing

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/about' element={<About />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinations)



function Rout () {

    return (
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
    )
}

export default Rout;