import {DETAIL_MOVIE_ATTEMPT,DETAIL_MOVIE_FAILED,DETAIL_MOVIE_SUCCESS } from '../../../actions/movie/detailMovieAction'

const initialState =
{
    isLoading: false,
    data: false,
    errorMessage: false
}

const detailMovieReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case DETAIL_MOVIE_ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case DETAIL_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                data: action.payload.data,
                errorMessage: action.payload.errorMessage
            }
            break
        case DETAIL_MOVIE_FAILED:
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

export default detailMovieReducer