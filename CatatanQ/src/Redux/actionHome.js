export const GET_HOME = 'GET_HOME';
export const SET_HOME = 'SET_HOME';
export const REMOVE_HOME = 'REMOVE_HOME';
export const POST_DATA = 'POST_DATA';
export const ADD_ITEM = 'ADD_ITEM';

export const getHome = payload => {
  return {
    type: 'GET_HOME',
    payload,
  };
};

export const setHome = payload => {
  return {
    type: 'SET_HOME',
    payload,
  };
};

export const setRemove = payload => {
  return {
    type: 'REMOVE_HOME',
    payload,
  };
};

export const postData = payload => {
  return {
    type: 'POST_DATA',
    payload,
  };
};

export const addItem = payload => {
  return {
    type: 'ADD_ITEM',
    payload,
  };
};
