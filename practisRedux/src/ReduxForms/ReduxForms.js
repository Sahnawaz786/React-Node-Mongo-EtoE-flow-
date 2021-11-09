import React from "react";
import template from "./ReduxForms.jsx";
import { reduxForm, reset } from 'redux-form';
import stdDataValidation from "../validations/stddatavalidation.js";
import ServerCall from "../shared/ServerCall.js";
import stuAction from "../actions/stuAction.js";
import { connect } from "react-redux";

class ReduxForms extends React.Component {

  constructor() {
    super();
    this.header = ["NAME", "RNO", "ADDRESS"];
    this.keys = ['name', "rno", "address"];

    this.fngetdata=this.fngetdata.bind(this);
    this.fnEdit=this.fnEdit.bind(this);
    this.fndelete=this.fndelete.bind(this);
    this.fncancel=this.fncancel.bind(this);
  }

  componentDidMount() {  //to get the data at firts time also
    stuAction();
  }

  fnEdit(rowdata){
    debugger;
     this.props.dispatch({
       type:'DATAFORM',
       payload:rowdata,
     })
  }

  fncancel(){
    this.props.dispatch(reset('StdForm'));
    this.props.dispatch({
      type:'CANCEL_EDIT',
    })
  }


  fndelete(rowdata){
     let ok = window.confirm("Are u Sure??");
     //one way of doing deletion
    //  let id =rowdata._id;
    //  if(ok){
    //   let res = ServerCall.fnSendPostReq('delete-std?id='+id,null,true)
    //   debugger;
    //   stuAction();
    //  }
   //Now Another way of doing deletion

   if(ok){
     this.props.dispatch({
         type:'DELETE_DATA',
         rowdata:rowdata
     })
   }
 
  }

  async fngetdata(datas) {
    const {isEdit} =this.props;
    // debugger;
    // let data = store.getState(); //we can also use these method to get the data
    // //but redux-form people says don't take these much risks from your side leave at us we will take care by using a method
    // debugger;
    // console.log(data.form.StdForm.value);

    if(isEdit){

    debugger;
      let id = datas._id;

      delete datas._id;

      let dataObj = {
        datas: datas
      }

      debugger;
      let res = await ServerCall.fnSendPostReq('/update-data?id='+id, dataObj, true)
  
      let result = res.data;
      debugger;
  
      if (typeof (result) == 'string') {
        alert('db connection failed!');
      } else {
        if (result.acknowledged == true) {
          alert('Data Updated Succesfully!');
          stuAction();
          this.fncancel();
        } else {
          alert('Data Insertion failed!');
        }
      }
    

    }
    else{

    let dataObj = {
      datas: datas
    }

    debugger;
    let res = await ServerCall.fnSendPostReq('insert', dataObj, true)

    let result = res.data;

    if (typeof (result) == 'string') {
      alert('db connection failed!');
    } else {
      if (result.acknowledged == true) {
        alert('Data inserted Succesfully!');
        stuAction();
        this.props.dispatch(reset('StdForm'));
      } else {
        alert('Data Insertion failed!');
      }
    }
  }
  }

  render() {
    return template.call(this);
  }
}

ReduxForms = reduxForm({
  form: 'StdForm',  //unique identy of a form
  validate: stdDataValidation, //whatever changes takes place redux-form people will pass the data object as an arguments to stddataValidation method
  enableReinitialize:true
})(ReduxForms)


//getting the store data

ReduxForms = connect((store) => {
  const {student,formdata,isEdit} = store.endtoEndReducer;
  // debugger;
  let data = student;
  return {
    studata: data,
    initialValues: formdata, //passing the data to initialValues so that the redux-form can render them into the fields
    isEdit:isEdit
  }
},(dispatch)=>{
   return {
     dispatch
   }
})(ReduxForms);

export default ReduxForms;
