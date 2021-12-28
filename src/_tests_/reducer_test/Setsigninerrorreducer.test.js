import SetSignErrorReducer from '../../reducers/Setsigninerrorreducer';
import { SET_ERROR_SIGNUP } from '../../actions/index';

describe('SetSignErrorReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SetSignErrorReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SET_ERROR_SIGNUP', () => {
    const action = {
      type: SET_ERROR_SIGNUP,
      ele: 'Invalid',
    };
    const expectedState = 'Invalid';
    expect(SetSignErrorReducer({}, action) === '').toBe(false);
    expect(SetSignErrorReducer({}, action)).toEqual(expectedState);
  });
});
