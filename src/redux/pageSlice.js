import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 1,
  },
  reducers: {
    prev: (state) => {
      state.value -= 1
    },
    next: (state) => {
      state.value += 1
    },
    resetPage: (state) => {
      state.value = 1
    }
  }
})

export const { prev, next, resetPage } = pageSlice.actions

export default pageSlice.reducer