import { createBrowserRouter } from 'react-router-dom'
// import ProductsList from '@scopes/products/presentation/pages/productsList'
import ProductsList from '@scopes/products/presentation/pages/productsList'
import Authentication from '@scopes/authentication/presentation/templates/Authentication'
import Login from '@scopes/authentication/presentation/pages/Login'
import { Text } from '@commons/styledComponents/basics'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />,
  },
  {
    path: '/auth',
    element: <Authentication />,
    children: [
      { index: true, element: <Text.H1>This is the default page</Text.H1> },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
])
