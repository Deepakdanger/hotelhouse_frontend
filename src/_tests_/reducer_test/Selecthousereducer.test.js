import SelectedHouseReducer from '../../reducers/Selecthousereducer';
import { SELECTED_HOUSE } from '../../actions/index';

describe('SelectedHouseReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SelectedHouseReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SELECTED_HOUSE', () => {
    const action = {
      type: SELECTED_HOUSE,
      ele: { id: '1' },
    };
    const expectedState = '1';
    expect(SelectedHouseReducer({}, action) === '').toBe(false);
    expect(SelectedHouseReducer({}, action)).toEqual(expectedState);
  });
});
