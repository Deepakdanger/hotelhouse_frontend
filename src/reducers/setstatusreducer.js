import { SET_STATUS } from '../actions/index';

const SetStatusReducer = (state = 'we', action) => {
  switch (action.type) {
    case SET_STATUS:
      return action.ele;
    default:
      return state;
  }
};
export default SetStatusReducer;
