import { useEffect } from 'react'
import './style.css'
import Logo from '@assets/logo.png'
import SvgLogo from '@assets/logo.svg'
import ProductsList from '@scopes/products/presentation/pages/productsList'
import Counter from '@commons/Counter/Counter'
import AppProviders from '@providers/AppProviders'

import { logRocket } from '@utils/logRocket'

const App = () => {
  useEffect(() => {
    logRocket()
  }, [])

  return (
    <AppProviders>
      <div>
        <h1>Hello world!!nkjfd</h1>
        <img src={Logo} height="200" width="200" alt="logo" />
        <img src={SvgLogo} height="200" width="200" alt="logosvg" />
        <Counter />
        <ProductsList />
      </div>
    </AppProviders>
  )
}
export default App
