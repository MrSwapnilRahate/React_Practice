import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from './createSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div>
       <button onClick={() => dispatch(increment())}>+</button>
       {count}
       <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
