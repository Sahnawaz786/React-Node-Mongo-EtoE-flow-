import React from 'react';

const TextBox = ({type,name,lbl,isEdit,input,meta:{touched,error}}) =>{
    //input is the default props which contains all the predefined attributes it is provided by redux-form people
    //input conatins all the properties of the input tag that we have used so we need to overwrite some properties of the input by again using it like type and name property of the input get's updated
  return <div className="row form-group">

     <div className="col-sm-5"><b>{lbl}:</b></div>
    <div className="col-sm-3"> <input type={type} disabled={isEdit} name={name} {...input} className="form-control" /> </div>
     <div className="col-sm-4"></div>
        {touched && error && <b className="text-danger">{error}</b>}
  </div>
}

export default TextBox;