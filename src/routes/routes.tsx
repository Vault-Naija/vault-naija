import { createBrowserRouter } from 'react-router-dom'
// import ProductsList from '@scopes/products/presentation/pages/productsList'
import Login from '@scopes/authentication/presentation/pages/Login'
import Register from '@scopes/authentication/presentation/pages/Register'
import Home from '@scopes/products/presentation/pages/Home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },

  {
    path: '/auth/register',
    element: <Register />,
  },
])
