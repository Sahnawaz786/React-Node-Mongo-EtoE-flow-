import React    from "react";
import { connect } from "react-redux";
import template from '../CompTable/CompTable.jsx';

class CompTable extends React.Component {

  render() {
    return template.call(this);
  }
}




export default CompTable;
