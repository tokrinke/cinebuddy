import { createSlice } from '@reduxjs/toolkit'

export const selectMovieSlice = createSlice({
    name: 'isMovieSelected',
    initialState: {
        isMovieSelected: false,
        selectedMovie: {}
    },
    reducers: {
        selectMovie: (state, action)=> {
            state.isMovieSelected = true
            state.selectedMovie = action.payload
        },
        closeMovie: state => {
            state.isMovieSelected = false
        }
    }
})

export const { selectMovie, closeMovie } = selectMovieSlice.actions

export default selectMovieSlice.reducer