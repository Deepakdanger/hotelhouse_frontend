import { SET_ERROR_SIGNIN } from '../actions/index';

const SetSignErrorReducer = (state = '', action) => {
  switch (action.type) {
    case SET_ERROR_SIGNIN:
      return action.ele;
    default:
      return state;
  }
};
export default SetSignErrorReducer;