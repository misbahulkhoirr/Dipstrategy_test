import axios from 'axios'
import { API_URL, TOKEN } from '../../../../utils'

export const DETAIL_MOVIE_ATTEMPT = 'DETAIL_MOVIE_ATTEMPT'
export const DETAIL_MOVIE_SUCCESS = 'DETAIL_MOVIE_SUCCESS'
export const DETAIL_MOVIE_FAILED  = 'DETAIL_MOVIE_FAILED'

export const loading = () =>
{
    return {
        type: DETAIL_MOVIE_ATTEMPT,
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
        type: DETAIL_MOVIE_SUCCESS,
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
        type: DETAIL_MOVIE_FAILED,
        payload:
        {
            isLoading: false,
            data: false,
            errorMessage
        }
    }
}

const detailMovieAction = (id) => 
{
    return async (dispatch) =>
    {
        dispatch({ type: 'SET_LOADING', value: true })
        dispatch(loading())
        axios({
            method: 'GET',
            url: `${API_URL}/movie/${id}`,
            headers:
            {
                'Authorization': 'Bearer ' + TOKEN,
            }
        })
        .then(response =>
        {
            console.log('resDETAIL', response);
            dispatch({ type: 'SET_LOADING', value: false })
            dispatch(success(response.data))
        })
        .catch(error =>
        {
            console.log('data error ');
            dispatch({ type: 'SET_LOADING', value: false })
            dispatch(failed(error.message))
        })
    }
}

export default detailMovieAction