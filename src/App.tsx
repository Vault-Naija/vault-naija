import './style.css'
import Logo from './assets/logo.png'
import SvgLogo from './assets/logo.svg'
import { useState } from 'react'

const App = () => {
  const emeka = 0
  console.log('emeka', emeka)
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello world!!nkjfd</h1>
      <img src={Logo} height="200" width="200" alt="logo" />
      <img src={SvgLogo} height="200" width="200" alt="logsvg" />
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  )
}

export default App
