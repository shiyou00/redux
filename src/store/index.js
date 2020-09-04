export const createStore = (reducer,applyMiddleware)=>{
  if(applyMiddleware){
    return applyMiddleware(createStore)(reducer);
  }
  let currentState = {};
  let observers = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState,action);
    observers.forEach(fn=>fn());
  }
  dispatch({ type: '@@REDUX_INIT' })
  function subscribe(fn) {
    observers.push(fn)
  }
  return {
    getState,dispatch,subscribe
  }
}

// const store = createStore(reducer);
// store.subscribe(() => { console.log('组件1收到store的通知') })
// store.subscribe(() => { console.log('组件2收到store的通知') })
// store.dispatch({type: 'plus'});
