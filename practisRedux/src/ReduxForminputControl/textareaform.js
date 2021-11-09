import React from 'react';

const Textarea = ({ name, lbl, input,meta:{touched,error} }) => {
    return <div className="row form-group">
        <div className="col-sm-5"><b>{lbl}:</b></div>
        <div className="col-sm-3"> <textarea name={name} {...input} className="form-control" ></textarea> </div>
        <div className="col-sm-4 text-left"></div>
          {touched && error && <b className="text-danger">{error}</b>}
    </div>
}

export default Textarea;