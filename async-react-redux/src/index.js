import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createStore } from "redux";
import { Provider } from 'react-redux'

export const actionTypes = {
  FETCH_START:'FETCH_START',
  FETCH_SUCCESS:'FETCH_SUCCESS',
  FETCH_ERROR:'FETCH_ERROR'
}

const initState = {
  isFetching: false,
  newsList:[],
  errorMsg:""
}

const reducer = (state= initState,action)=>{
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {...state,isFetching:true};
    case actionTypes.FETCH_SUCCESS:
      return {...state,isFetching:false,newsList:action.news};
    case actionTypes.FETCH_ERROR:
      return {...state,isFetching:false,newsList:[],errorMsg:'服务异常'};
    default:
        return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
