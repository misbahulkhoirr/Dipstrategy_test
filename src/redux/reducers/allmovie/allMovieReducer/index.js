import {ALL_MOVIE_ATTEMPT,ALL_MOVIE_FAILED,ALL_MOVIE_SUCCESS } from '../../../actions/movie/allMovieAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const allMovieReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case ALL_MOVIE_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case ALL_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case ALL_MOVIE_FAILED:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default allMovieReducer