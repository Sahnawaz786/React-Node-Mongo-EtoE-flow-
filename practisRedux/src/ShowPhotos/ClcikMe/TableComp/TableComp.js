import React    from "react";
import template from "./TableComp.jsx";

class TableComp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default TableComp;
