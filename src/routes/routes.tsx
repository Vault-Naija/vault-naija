import { createBrowserRouter } from 'react-router-dom'
// import ProductsList from '@scopes/products/presentation/pages/productsList'
import ProductsList from '@scopes/products/presentation/pages/productsList'
import Login from '@scopes/authentication/presentation/pages/Login'
import Register from '@scopes/authentication/presentation/pages/Register'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />,
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
