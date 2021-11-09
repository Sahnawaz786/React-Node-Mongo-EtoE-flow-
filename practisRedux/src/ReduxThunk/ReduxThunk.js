import React    from "react";
import template from "./ReduxThunk.jsx";
import {connect} from 'react-redux';
import postAction from "../actions/postsActions.js";
import {bindActionCreators} from 'redux'; //for binding postaction method with dispatch

class ReduxThunk extends React.Component {

  fngetpost(){
    this.props.postAction();
  }

  render() {
    return template.call(this);
  }
}

ReduxThunk = connect(null,(dispatch)=>{
      return {
         postAction:bindActionCreators(postAction,dispatch) //since all three are available here we performed the action here action -> binding normal method with dispatch method using thunk
      }
})(ReduxThunk);

export default ReduxThunk;
