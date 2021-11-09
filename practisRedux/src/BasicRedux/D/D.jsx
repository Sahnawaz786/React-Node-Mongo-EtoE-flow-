import "./D.css";
import React from "react";

function template() {
  return (
    <div className="d">
      <h1>D</h1>
      <h3>Name:{this.props.name}</h3>
      <h3>loc:{this.props.loc}</h3>
    </div>
  );
};

export default template;
