import {combineReducers} from 'redux';

import {allMovieReducer, detailMovieReducer} from './allmovie';
import globalReducer from './globalReducer'

const reducers = combineReducers({
  allMovieReducer,
  globalReducer,
  detailMovieReducer
});

export default reducers;
