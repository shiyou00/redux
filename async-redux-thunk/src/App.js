import { connect } from 'react-redux'
import News from "./News";
import {actionCreator} from "./index";

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews:()=>{
      dispatch(actionCreator.fetchNews());
    }
  }
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
