import {SET_FAVORITE} from './actionFavorite';

const initialState = {
  data: [],
};

const reducerFavorite = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        data:
          state.data.indexOf(action.payload) === -1
            ? [...state.data, action.payload]
            : [...state.data, null],
      };
    default:
      return state;
  }
};

export default reducerFavorite;
