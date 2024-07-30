import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, PURCHASE_BOOK } from './Redux/actions'

const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const books = useSelector((state)=>state.books)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Counter Component</h3>
      <h4>Count is : {count}</h4>
      <button onClick={()=>dispatch({type:INCREMENT})}>Add</button>
      <button onClick={()=>dispatch({type:DECREMENT})}>Minus</button>
      <br />
      <h4>Books are : {books}</h4>
      <button onClick={()=>dispatch({type:PURCHASE_BOOK})}>Purchase</button>

    </div>
  )
}

export default CounterComponent