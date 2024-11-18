import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './ReduxCounter/createSlice'


const Counter = () => {
    const count = useSelector((state)= state.counter.value);
    const dispatch = useDispatch;

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter