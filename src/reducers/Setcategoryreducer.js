import { SELECTED_CATEGORY } from '../actions/index';

const SetCategoryReducer = (state = '', action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return action.ele;
    default:
      return state;
  }
};
export default SetCategoryReducer;