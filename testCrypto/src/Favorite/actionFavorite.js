export const SET_FAVORITE = 'SET_FAVORITE';

export const setFavorite = payload => {
  return {
    type: SET_FAVORITE,
    payload,
  };
};
