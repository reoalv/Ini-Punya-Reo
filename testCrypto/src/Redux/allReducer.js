import {combineReducers} from 'redux';
import ReducerFavorite from '../Favorite/reducerFavorite';
import ReducerHome from '../Home/reducerHome';

export const allReducer = combineReducers({
  ReducerFavorite,
  ReducerHome,
});
