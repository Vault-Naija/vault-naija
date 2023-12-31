import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCount,
  getCount,
  incrementCount,
} from '../../infrastructure/productsListSlice'

export const useProducts = () => {
  const count = useSelector(getCount)
  const dispatch = useDispatch()
  const increment = () => dispatch(incrementCount())
  const decrement = () => dispatch(decrementCount())
  return { count, increment, decrement }
}
