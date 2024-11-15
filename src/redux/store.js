import { legacy_createStore as createStore } from 'redux';

// Define initial state
const initialState = {
  count: 0
};

// Define a simple reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(counterReducer);

export default store;
