import React, { useState, FC } from 'react'
import { withProtection } from '@hoc/withProtection'

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  )
}

export default withProtection(Counter)
