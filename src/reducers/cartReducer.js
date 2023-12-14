import { createSlice } from '@reduxjs/toolkit'

export const StateSlice = createSlice({
  name: 'State',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { increment, decrement, setByAmount } = StateSlice.actions

export default StateSlice.reducer