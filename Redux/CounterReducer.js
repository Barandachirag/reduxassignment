import { DECREMENT, INCREMENT, PURCHASE_BOOK } from './actions'
const initialState = {
    count:10,
    books:20
}
const CounterReducer = (state=initialState,action) => {
    switch(action.type){
        case INCREMENT: return {...state,count: state.count + 1}
        case DECREMENT: return {...state,count: state.count - 1}
        case PURCHASE_BOOK: return {...state,books: state.books - 1}
        default: return state
    }
  
}

export default CounterReducer