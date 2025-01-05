import { configureStore } from '@reduxjs/toolkit'
import setMovieReducer from './selectMovieSlice'

export default configureStore({
    reducer: {
        movieReducer: setMovieReducer,
    }
  })