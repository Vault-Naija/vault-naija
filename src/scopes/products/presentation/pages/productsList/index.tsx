import { useProducts } from '../../../hooks/useProducts'

const ProductsList = () => {
  const { count, increment, decrement } = useProducts()
  return (
    <div>
      <p data-testid="counter">{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ProductsList
