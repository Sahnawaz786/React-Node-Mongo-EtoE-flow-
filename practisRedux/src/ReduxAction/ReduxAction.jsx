import "./ReduxAction.css";
import React from "react";

function template() {
  return (
    <div className="redux-action">
      <h1>ReduxAction</h1>
      <button onClick={this.users.bind(this)}>Users</button>
      <button onClick={this.photos.bind(this)}>Photos</button>

    </div>
  );
};

export default template;
