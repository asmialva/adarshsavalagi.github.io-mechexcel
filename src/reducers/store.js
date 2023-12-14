import { configureStore } from '@reduxjs/toolkit'
import StateReducer from './cartReducer'
export default configureStore({
  reducer: {
    State: StateReducer,
  },
})