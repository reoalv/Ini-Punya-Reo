import {SET_HOME} from './actionHome';

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
    default:
      return state;
  }
};

export default reducerHome;
