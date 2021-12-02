import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import SetCurrentUserTokenReducer from './Setcurrentusertoken';
import SelectedHouseReducer from './Selecthousereducer';

const rootReducer = combineReducers({
  current_user_token: SetCurrentUserTokenReducer,
  selected_house: SelectedHouseReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  current_user_token: '',
  selected_house:'',
};

const store = createStore(
  rootReducer, initialState,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
export default store;
