import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import About from './Components/about/About'
import Home from './Home'

const router = createBrowserRouter([
  {path: '/about', element: <About />},
  {path: '/', element: <Home />},
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
        <RouterProvider router={router} />
    )
}

export default Rout;