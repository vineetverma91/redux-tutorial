import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // Access the count state from the store
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // Dispatch actions to modify the state
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;