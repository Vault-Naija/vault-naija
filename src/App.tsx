import './style.css'
import Logo from './assets/logo.png'
import SvgLogo from './assets/logo.svg'
import Counter from './components/Counter/Counter'

const App = () => {
  return (
    <div>
      <h1>Hello world!!nkjfd</h1>
      <img src={Logo} height="200" width="200" alt="logo" />
      <img src={SvgLogo} height="200" width="200" alt="logsvg" />
      <Counter />
    </div>
  )
}

export default App
