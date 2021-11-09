import React    from "react";
import template from "./D.jsx";
import {connect} from 'react-redux';

class D extends React.Component {
  render() {
    return template.call(this);
  }
}


D=connect((store)=>{
     return {
       name:store.nameReducer.name,
       loc:store.locReducer.loc
     }
  }
)(D)

export default D;
