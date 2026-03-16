import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slice/appSlice'
import productReducer from '../redux/slice/productSlice'
import basketreducer from '../redux/slice/basketSlice'
import favoriteReducer from '../redux/slice/favoriteSlice'

export const store = configureStore({
  reducer: {
    app:appReducer,
    product:productReducer,
    basket:basketreducer,
    favorite:favoriteReducer
  },
})