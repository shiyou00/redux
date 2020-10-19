import React from "react";

function Count(props){
  const { count, onIncrement, onDecrement } = props;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default Count;
