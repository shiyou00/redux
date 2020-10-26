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

export const applyMiddleware = (...middlewares) => createStore => reducer => {
  const store = createStore(reducer)
  let { getState, dispatch } = store
  const params = {
    getState,
    dispatch: (action) => dispatch(action)
  }
  const middlewareArr = middlewares.map(middleware => middleware(params))
  dispatch = compose(...middlewareArr)(dispatch);
  return { ...store, dispatch }
}

function compose(...fns) {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce( (res, cur) => {
    return (...args) => {
      console.log('res----',res);
      console.log('cur----',cur);
      console.log('dispatch----',args[0].toString());
      return res(cur(...args))
    }
  })
}
