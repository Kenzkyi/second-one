import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FoodItem from './pages/FoodItem'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Admin from './pages/Admin'
import AdminFoodItem from './pages/AdminFoodItem'
import SignUp from './pages/SignUp'
import Logout from './pages/Logout'

const App = () => {

  const router = createBrowserRouter([
    {path:'',element:<LandingPage/>},
    {path:':id',element:<FoodItem/>},
    {path:'login',element:<Login />},
    {path:'admin',element:<Admin/>,},
    {path:'admin/:id',element:<AdminFoodItem/>},
    {path:'admin/logout',element:<Logout/>}
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
