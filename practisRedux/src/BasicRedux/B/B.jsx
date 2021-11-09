import "./B.css";
import React from "react";

function template() {
  return (
    <div className="b">
      <h1>B</h1>
      <p>
         Loc:<input ref="locRef"/> <button onClick={this.fnclick.bind(this)}>Store</button>
      </p>
    </div>
  );
};

export default template;
