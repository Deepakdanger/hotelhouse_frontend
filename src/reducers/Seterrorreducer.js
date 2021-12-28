import { SET_ERROR_LOGIN } from '../actions/index';

const SetErrorReducer = (state = '', action) => {
  switch (action.type) {
    case SET_ERROR_LOGIN:
      return action.ele;
    default:
      return state;
  }
};
export default SetErrorReducer;
