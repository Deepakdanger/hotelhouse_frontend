import { SET_ERROR_SIGNUP } from '../actions/index';

const SetSignErrorReducer = (state = '', action) => {
  switch (action.type) {
    case SET_ERROR_SIGNUP:
      return action.ele;
    default:
      return state;
  }
};
export default SetSignErrorReducer;
