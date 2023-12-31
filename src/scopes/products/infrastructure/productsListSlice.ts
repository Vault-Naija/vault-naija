import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../core/store'

interface ProductsListState {
  products: string[]
  count: number
}

const initialState: ProductsListState = {
  products: [],
  count: 0,
}

const productsListSlice = createSlice({
  name: 'productsList',
  initialState: initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1
    },
    decrementCount: (state) => {
      state.count -= 1
    },
  },
})

export const { incrementCount, decrementCount } = productsListSlice.actions
export default productsListSlice.reducer

export const getCount = createSelector(
  (state: RootState) => state.productsList,
  (productsList) => productsList.count
)
