import React    from "react";
import template from "./BasicRedux.jsx";

class BasicRedux extends React.Component {
  render() {
    return template.call(this);
  }
}

export default BasicRedux;
