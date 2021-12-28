import SetStatusReducer from '../../reducers/setstatusreducer';
import { SET_STATUS } from '../../actions/index';

describe('SetCategoryReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SetStatusReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SET_STATUS', () => {
    const action = {
      type: SET_STATUS,
      ele: 'true',
    };
    const expectedState = 'true';
    expect(SetStatusReducer({}, action) === '').toBe(false);
    expect(SetStatusReducer({}, action)).toEqual(expectedState);
  });
});
