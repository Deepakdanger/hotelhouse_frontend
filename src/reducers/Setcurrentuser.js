import { SET_CURRENT_USER } from '../actions/index';

const SetCurrentUserReducer = (state = '', action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(action);
      return action.ele;
    default:
      return state;
  }
};
export default SetCurrentUserReducer;
