import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const reducer = (state = {count: 0}, action) => {
  switch (action.type){
    case 'INCREASE': return {count: state.count + 1};
    case 'DECREASE': return {count: state.count - 1};
    default: return state;
  }
};

const actions = {
  increase: () => ({type: 'INCREASE'}),
  decrease: () => ({type: 'DECREASE'})
}

const store = createStore(reducer);

function App() {
  const { getState, dispatch, subscribe } = store;
  const [ count, setCount ] = useState(getState().count);

  const onIncrement = ()=>{
    dispatch(actions.increase());
  }

  const onDecrement = ()=>{
    dispatch(actions.decrease());
  }

  subscribe(()=>{
    setCount(getState().count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

