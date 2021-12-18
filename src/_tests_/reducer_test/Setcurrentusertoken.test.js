import SetCurrentUserTokenReducer from '../../reducers/Setcurrentusertoken';
import { SET_CURRENT_TOKEN } from '../../actions/index';

describe('SetCurrentUserTokenReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SetCurrentUserTokenReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SET_CURRENT_TOKEN', () => {
    const action = {
      type: SET_CURRENT_TOKEN,
      ele: 'token',
    };
    const expectedState = 'token';
    expect(SetCurrentUserTokenReducer({}, action) === '').toBe(false);
    expect(SetCurrentUserTokenReducer({}, action)).toEqual(expectedState);
  });
});
