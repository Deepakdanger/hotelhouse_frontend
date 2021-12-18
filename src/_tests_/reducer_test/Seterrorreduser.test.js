import SetErrorReducer from '../../reducers/Seterrorreducer';
import { SET_ERROR_LOGIN } from '../../actions/index';

describe('SetErrorReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SetErrorReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SET_ERROR_LOGIN', () => {
    const action = {
      type: SET_ERROR_LOGIN,
      ele: 'Invalid',
    };
    const expectedState = 'Invalid';
    expect(SetErrorReducer({}, action) === '').toBe(false);
    expect(SetErrorReducer({}, action)).toEqual(expectedState);
  });
});
