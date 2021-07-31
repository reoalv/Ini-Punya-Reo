import {ADD_ITEM, REMOVE_HOME, SET_HOME} from './actionHome';

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
    case ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case REMOVE_HOME:
      console.log(action.payload, 'INI REDUCER');
      return {
        ...state,
        data: state.data.filter(i => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducerHome;
