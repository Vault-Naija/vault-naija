import './style.css'
import Logo from '@assets/logo.png'
import SvgLogo from '@assets/logo.svg'
import { Provider } from 'react-redux'
import ProductsList from '@scopes/products/presentation/pages/productsList'
import { store } from '@scopes/core/store'
import Counter from '@commons/Counter/Counter'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello world!!nkjfd</h1>
        <img src={Logo} height="200" width="200" alt="logo" />
        <img src={SvgLogo} height="200" width="200" alt="logosvg" />
        <Counter />
        <ProductsList />
      </div>
    </Provider>
  )
}
export default App
