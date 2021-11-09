import React    from "react";
import template from "./B.jsx";
import myStore from '../../store/myReduxstore';
class B extends React.Component{

  fnclick(){
    debugger;
    let loc=this.refs.locRef.value;
    myStore.dispatch({
      type:"LOC",
      loc:loc
    })
  }

  render() {
    return template.call(this);
  }
}

export default B;
