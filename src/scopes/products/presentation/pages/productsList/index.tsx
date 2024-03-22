import { Text } from '@commons/styledComponents/basics'
import { useProducts } from '../../../application/useProducts'

const ProductsList = () => {
  const { count, increment, decrement } = useProducts()
  return (
    <div>
      <p data-testid="counter">{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Text.Span fontWeight="500" fontSize="4rem">
        Hellow!
      </Text.Span>
    </div>
  )
}

export default ProductsList
