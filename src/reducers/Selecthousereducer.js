import { SELECTED_HOUSE } from '../actions/index';

const SelectedHouseReducer = (state = '', action) => {
  switch (action.type) {
    case SELECTED_HOUSE:
      return action.ele.id;
    default:
      return state;
  }
};
export default SelectedHouseReducer;
