import { connect } from './react-redux'
import News from "./News";
import {actionCreator, actionTypes} from "./action";

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews:()=>{
      dispatch(actionCreator.fetchNews());
    },
    fetchStart:()=>{
      dispatch({type:actionTypes.FETCH_START})
    }
  }
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
