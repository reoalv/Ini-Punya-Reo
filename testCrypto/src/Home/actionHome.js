export const GET_API = 'GET_API';
export const SET_API = 'SET_API';

export const getApi = payload => {
  return {
    type: GET_API,
    payload,
  };
};

export const setApi = payload => {
  return {
    type: SET_API,
    payload,
  };
};
