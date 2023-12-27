import "./style.css";
import Logo from "./assets/logo.png";
import SvgLogo from "./assets/logo.svg";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello world!!nkjfd</h1>
      <img src={Logo} height="200" width="200" />
      <img src={SvgLogo} height="200" width="200" />
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
};

export default App;
