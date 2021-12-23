import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import SetCurrentUserTokenReducer from './Setcurrentusertoken';
import SelectedHouseReducer from './Selecthousereducer';
import SetErrorReducer from './Seterrorreducer';
import SetSignErrorReducer from './Setsigninerrorreducer';
import SetCategoryReducer from './Setcategoryreducer';
import SetStatusReducer from './setstatusreducer';

const rootReducer = combineReducers({
  currentusertoken: SetCurrentUserTokenReducer,
  selectedhouse: SelectedHouseReducer,
  errormessage: SetErrorReducer,
  errorsignup: SetSignErrorReducer,
  filter: SetCategoryReducer,
  status: SetStatusReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
export default store;
