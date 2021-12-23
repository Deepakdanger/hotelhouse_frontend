export const SET_CURRENT_TOKEN = 'SET_CURRENT_TOKEN';
export const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN';
export const SET_ERROR_SIGNUP = 'SET_ERROR_SIGNUP';
export const SELECTED_HOUSE = 'SELECTED_HOUSE';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';
export const SET_STATUS = 'SET_STATUS';

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

export const setErrorSignupAction = (ele) => ({
  type: SET_ERROR_SIGNUP,
  ele,
});

export const setCategoryAction = (ele) => ({
  type: SELECTED_CATEGORY,
  ele,
});

export const setStatusAction = (ele) => ({
  type: SET_STATUS,
  ele,
});
