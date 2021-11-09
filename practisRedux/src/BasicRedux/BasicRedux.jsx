import "./BasicRedux.css";
import React from "react";
import A from './A/index';
import B from './B/index';
import C from './C/index';
// import D from './D/index';

function template() {
  return (
    <div className="basic-redux">
      <h1>BasicRedux</h1>

      <A />
      <B />
      <C />
    
    </div>
  );
};

export default template;
