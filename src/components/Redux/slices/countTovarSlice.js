import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const countTovar = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
       if(state.value<0){(state.value+=1)}
    },
  },
})

export const { increment, decrement, incrementByAmount } = countTovar.actions

export default countTovar.reducer