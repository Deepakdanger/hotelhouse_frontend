import SetCategoryReducer from '../../reducers/Setcategoryreducer';
import { SELECTED_CATEGORY } from '../../actions/index';

describe('SetCategoryReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SetCategoryReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SELECT_CATEGORY', () => {
    const action = {
      type: SELECTED_CATEGORY,
      ele: 'House',
    };
    const expectedState = 'House';
    expect(SetCategoryReducer({}, action) === '').toBe(false);
    expect(SetCategoryReducer({}, action)).toEqual(expectedState);
  });
});
