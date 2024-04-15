import { createSlice } from '@reduxjs/toolkit'

/**
 * Creates a slice of state with the name 'page', which handles page-related actions in the Redux store.
 *
 * The 'page' slice is defined with an initial state value of 1, representing the current page number in a paginated interface.
 * It includes three reducers:
 *   - 'prev': Decreases the 'value' by 1, used to navigate to the previous page.
 *   - 'next': Increases the 'value' by 1, used to navigate to the next page.
 *   - 'resetPage': Resets the 'value' to 1, typically used to return to the first page or reset pagination.
 *
 * This slice is part of the Redux Toolkit ecosystem, which simplifies Redux state management by automatically
 * handling action creation and state immutability updates.
 *
 * Usage:
 * Dispatch actions directly from the component using the action creators:
 * dispatch(prev()), dispatch(next()), dispatch(resetPage()).
 *
 * This setup helps in managing the state transitions for user navigation within paginated pages.
 */
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