import "./ShowPhotos.css";
import React from "react";
import TableComp from "./TableComp/TableComp";

function template() {
  const {userHeaders,userKeys} = this.state;
  return (
    <div className="show-photos">
      <h1>ShowPhotos</h1>
      <TableComp header={userHeaders} data={this.props.dataarray} keys={userKeys} />
    </div>
  );
};

export default template;
