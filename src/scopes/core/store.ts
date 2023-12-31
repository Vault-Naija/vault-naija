import { configureStore } from '@reduxjs/toolkit'
import productsListReducer from '../products/infrastructure/productsListSlice'

export const store = configureStore({
  reducer: {
    productsList: productsListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
