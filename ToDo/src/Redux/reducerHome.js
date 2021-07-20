import {REMOVE_HOME, SET_HOME} from './actionHome';

const initialState = {
  data: [],
};

const reducerHome = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME:
      return {
        ...state,
        data: action.payload,
      };
    case REMOVE_HOME:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload),
          ...state.data.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default reducerHome;
