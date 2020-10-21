import { connect } from 'react-redux'
import News from "./News";
import {actionTypes} from "./index";

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews:()=>{
      dispatch({type:actionTypes.FETCH_START})
      new Promise(function (resolve,reject) {
        setTimeout(()=>{
          resolve([
            {
              title:"111"
            },
            {
              title:"222"
            }
          ]);
        },2000)
      }).then((response)=>{
        dispatch({
          type:actionTypes.FETCH_SUCCESS,
          news:response
        })
      }).catch(()=>{
        dispatch({
          type:actionTypes.FETCH_ERROR
        })
      })
    }
  }
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
