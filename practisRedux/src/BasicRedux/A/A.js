import React    from "react";
import template from "./A.jsx";
import myStore from '../../store/myReduxstore';

class A extends React.Component {

  fnclick(){
    debugger;
    let name=this.refs.nameRef.value;
    myStore.dispatch({
      type:"NAME",
      name:name
    })
  }
  render() {
    return template.call(this);
  }
}

export default A;
