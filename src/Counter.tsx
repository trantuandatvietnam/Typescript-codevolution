import { useReducer } from "react";
import { initialState, reducer } from "./App";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment: 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement: 10
      </button>
    </div>
  );
};

export default Counter;
