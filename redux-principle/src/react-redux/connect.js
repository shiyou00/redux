import React from 'react'
import { Context } from "./Provider";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    class Connect extends React.Component {
      componentDidMount() {
        this.context.subscribe(()=>this.forceUpdate());
      }
      render() {
        return (
          <Component
            { ...this.props }
            { ...mapStateToProps(this.context.getState()) }
            { ...mapDispatchToProps(this.context.dispatch) }
          />
        )
      }
    }
    Connect.contextType = Context;
    return Connect
  }
}
