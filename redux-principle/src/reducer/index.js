import {actionTypes} from "../action";

const initState = {
  isFetching: false,
  newsList:[],
  errorMsg:""
}

export const reducer = (state= initState,action)=>{
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
