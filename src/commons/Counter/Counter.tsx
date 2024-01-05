import { useState, FC } from 'react'
import { withProtection } from '@commons/hoc/withProtectedComponents/withProtection'

export interface CounterProps {
  defaultValue: number
}

const Counter: FC<CounterProps> = ({ defaultValue = 0 }) => {
  const [count, setCount] = useState<number>(defaultValue)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  )
}

export default withProtection<CounterProps>(Counter)
