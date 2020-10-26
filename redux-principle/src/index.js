import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
// import { createStore,applyMiddleware } from "./redux";
import { createStore, applyMiddleware } from "./redux-basic";
import { Provider } from "./react-redux";
import { reducer } from "./reducer";

// ------- 基础版本 redux 中间件调用方式 -------

function showLog1(store) {
  let next = store.dispatch
  return (action) => {
    console.log('进入日志1');
    const result = next(action);
    console.log('退出日志1');
    return result;
  }
}

function showLog2(store) {
  let next = store.dispatch
  return (action) => {
    console.log('进入日志2');
    const result = next(action)
    console.log('退出日志2');
    return result
  }
}

function showLog3(store) {
  let next = store.dispatch
  return (action) => {
    console.log('进入日志3');
    const result = next(action)
    console.log('退出日志3');
    return result
  }
}

const store = createStore(reducer);

applyMiddleware(store, [ showLog1, showLog2, showLog3 ]);

// ------- 基础版本 redux 中间件调用方式 -------


// ------- 进阶版 redux 中间件调用方式 -------

// const logger = store => next => action => {
//   console.log('日志中间件1',next)
//   let result = next(action)
//   return result
// }
//
// const logger2 = store => next => action => {
//   console.log('日志中间件2',next)
//   let result = next(action)
//   return result
// }
//
// const logger3 = store => next => action => {
//   console.log('日志中间件3',next)
//   let result = next(action)
//   return result
// }

// const store = createStore(reducer,applyMiddleware(logger,logger2,logger3));

// ------- 进阶版 redux 中间件调用方式 -------

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
