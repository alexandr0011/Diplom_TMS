import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { fetchingReducer } from './reducers/fetchingReducer';
import { errorsReducer } from './reducers/errorsReducer';
import { loginReducer } from './reducers/loginReducer';
import { tasksReducer } from './reducers/tasksReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
  fetching: fetchingReducer,
  errors: errorsReducer,
  login: loginReducer,
  tasks: tasksReducer,
  userName: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
