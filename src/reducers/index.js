import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import SetCurrentUserTokenReducer from './Setcurrentusertoken';
import SelectedHouseReducer from './Selecthousereducer';
import SetErrorReducer from './Seterrorreducer';
import SetSignErrorReducer from './Setsigninerrorreducer'

const rootReducer = combineReducers({
  current_user_token: SetCurrentUserTokenReducer,
  selected_house: SelectedHouseReducer,
  error_message: SetErrorReducer,
  error_signin: SetSignErrorReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  current_user_token: '',
  selected_house:'',
  error_message:'',
  error_signin:'',
};

const store = createStore(
  rootReducer, initialState,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
export default store;
