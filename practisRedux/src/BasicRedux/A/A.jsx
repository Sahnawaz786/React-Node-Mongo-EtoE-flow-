import "./A.css";
import React from "react";

function template() {
  return (
    <div className="a">
      <h1>A</h1>

      <p>
         Name:<input ref="nameRef" /> <button onClick={this.fnclick.bind(this)}>Store</button>
      </p>
    
    </div>
  );
};

export default template;
