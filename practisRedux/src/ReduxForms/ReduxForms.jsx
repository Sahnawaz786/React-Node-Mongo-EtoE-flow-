import "./ReduxForms.css";
import React from "react";
import { Field } from 'redux-form';
import TextBox from '../ReduxForminputControl/inputform';
import Textarea from '../ReduxForminputControl/textareaform';
import CompTable from "../ReusableTable/CompTable/index";
import store from '../store/myReduxstore';

function template() {
  const {isEdit} = this.props;
  return (
    <div className="redux-forms container-fluid">
      <h1>Student Data:</h1>
      <form onSubmit={this.props.handleSubmit(this.fngetdata)}>

        <Field type="text" lbl="Name" component={TextBox} name="name" />

        <Field type="number" lbl="Rno" isEdit={isEdit} component={TextBox} name="rno" />

        <Field component={Textarea} lbl="Address" name="address" />

        <div className="row form-group">
          <div className="offset-sm-5 col-sm-7 text-right ">
            {
                isEdit ?
                <>
                <input disabled={this.props.invalid} type="submit" value="update" className="btn btn-primary" />
                <input type="button" onClick={this.fncancel} value="cancel" className="btn btn-primary" />
                </>
                :
                <input disabled={this.props.invalid} type="submit" value="register" className="btn btn-primary" />
  
            }


          </div>
          {/* <button onClick={this.fngetdata.bind(this)}>Submit</button> */}

        </div>
      </form>
      <CompTable

        header={this.header}
        keys={this.keys}
        data={this.props.studata}
        fnEdit={this.fnEdit}
        fndelete={this.fndelete}
      />
    </div>
  );
};

export default template;
