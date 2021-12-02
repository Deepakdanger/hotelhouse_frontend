import { SET_CURRENT_TOKEN } from '../actions/index';

const SetCurrentUserTokenReducer = (state = '', action) => {
  switch (action.type) {
    case SET_CURRENT_TOKEN:
      return action.ele;
    default:
      return state;
  }
};
export default SetCurrentUserTokenReducer;
