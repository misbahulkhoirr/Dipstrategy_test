import axios from 'axios'
import { API_URL, TOKEN } from '../../../../utils'

export const ALL_MOVIE_ATTEMPT = 'ALL_MOVIE_ATTEMPT'
export const ALL_MOVIE_SUCCESS = 'ALL_MOVIE_SUCCESS'
export const ALL_MOVIE_FAILED  = 'ALL_MOVIE_FAILED'

export const loading = () =>
{
    return {
        type: ALL_MOVIE_ATTEMPT,
        payload:
        {
            isLoading: true,
            data: false,
            errorMessage: false
        }
    }
}

export const success = (data) =>
{
    return {
        type: ALL_MOVIE_SUCCESS,
        payload:
        {
            isLoading: false,
            data,
            errorMessage: false
        }
    }
}

export const failed = (errorMessage) =>
{
    return {
        type: ALL_MOVIE_FAILED,
        payload:
        {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const allMovieAction = (name) => 
{
    return async (dispatch) =>
    {
        dispatch({ type: 'SET_LOADING', value: true })
        dispatch(loading())
        axios({
            method: 'GET',
            url: `${API_URL}/movie/${name}`,
            headers:
            {
                'Authorization': 'Bearer ' + TOKEN,
            }
        })
        .then(response =>
        {
            console.log('res', response);
            dispatch({ type: 'SET_LOADING', value: false })
            dispatch(success(response.data))
        })
        .catch(error =>
        {
            console.log('data error ', error);
            dispatch({ type: 'SET_LOADING', value: false })
            dispatch(failed(error.message))
        })
    }
}

export default allMovieAction