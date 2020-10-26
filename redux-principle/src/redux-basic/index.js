export const createStore = (reducer)=>{
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

export const applyMiddleware = (store, middlewares) =>{
  middlewares = [ ...middlewares ]
  middlewares.reverse()
  middlewares.forEach(middleware =>
    store.dispatch = middleware(store)
  )
}
