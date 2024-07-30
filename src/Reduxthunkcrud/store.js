// src/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { ApiReducers } from './ApiReducers';

const rootReducer = combineReducers({
  users: ApiReducers,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

