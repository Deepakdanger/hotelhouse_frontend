export const SET_CURRENT_TOKEN = 'SET_CURRENT_TOKEN';
export const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN';
export const SET_ERROR_SIGNIN = 'SET_ERROR_SIGNIN';
export const SELECTED_HOUSE = 'SELECTED_HOUSE';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';

export const setCurrentTokenAction = (ele) => ({
  type: SET_CURRENT_TOKEN,
  ele,
});

export const selectedHouseAction = (ele) => ({
  type: SELECTED_HOUSE,
  ele,
});

export const setErrorLoginAction = (ele) => ({
  type: SET_ERROR_LOGIN,
  ele,
});

export const setErrorSigninAction = (ele) => ({
  type: SET_ERROR_SIGNIN,
  ele,
});

export const setCategoryAction = (ele) => ({
  type: SELECTED_CATEGORY,
  ele,
});
