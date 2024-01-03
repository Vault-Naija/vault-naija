import { createBrowserRouter } from 'react-router-dom'
// import ProductsList from '@scopes/products/presentation/pages/productsList'
import Counter from '@commons/Counter/Counter'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>This is our product list page</h1>,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
])
