import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const data: any = null
  return (
    <div>
      <p>{count}</p>
      {count === 10 && <p>{data.name}</p>}
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  )
}

export default Counter
