import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageSlice'

/**
 * Configures and returns a Redux store with the specified reducers.
 *
 * This function creates a Redux store that is configured with a reducer, which is an essential part of
 * state management in Redux. Here, the 'page' reducer is provided, which should handle all state changes
 * related to 'page' state in the application.
 */
export default configureStore({
  reducer: {
    page: pageReducer
  }
})