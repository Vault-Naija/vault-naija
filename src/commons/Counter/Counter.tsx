import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  )
}

export default Counter
