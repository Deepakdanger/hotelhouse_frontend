export const SET_CURRENT_TOKEN = 'SET_CURRENT_TOKEN';
export const SELECTED_HOUSE= 'SELECTED_HOUSE';

export const setCurrentTokenAction = (ele) => ({
  type: SET_CURRENT_TOKEN,
  ele,
});

export const selectedHouseAction = (ele) => ({
  type: SELECTED_HOUSE,
  ele,
});

