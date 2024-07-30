import { createStore } from "redux";
import CounterReducers from "./CounterReducer";

const store = createStore(CounterReducers);


export default store;