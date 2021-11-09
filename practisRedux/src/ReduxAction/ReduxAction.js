import React    from "react";
import template from "./ReduxAction.jsx";
import userActions from '../actions/userActions';
import photoActions from "../actions/photoActions.js";
import { connect } from "react-redux";

class ReduxAction extends React.Component {
  users(){
     userActions(this.props.dispatch);
  }

  photos(){
    photoActions(this.props.dispatch);
  }

  render() {
    return template.call(this);
  }
}

ReduxAction = connect(null,(dispatch)=>{
      return {
        dispatch:dispatch
      }
})(ReduxAction);

export default ReduxAction;
