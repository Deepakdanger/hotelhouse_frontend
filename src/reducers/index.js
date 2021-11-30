import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import SetCurrentUserReducer from './Setcurrentuser';

const rootReducer = combineReducers({
  current_user: SetCurrentUserReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  current_user: '',
};

const store = createStore(
  rootReducer, initialState,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
export default store;
