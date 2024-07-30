import { createStore, applyMiddleware, combineReducers } from 'redux';
//import thunk from 'redux-thunk';
import { thunk } from 'redux-thunk';
import usersReducer from './usersReducer'; // Import the usersReducer

const rootReducer = combineReducers({
  users: usersReducer, // Use the usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

