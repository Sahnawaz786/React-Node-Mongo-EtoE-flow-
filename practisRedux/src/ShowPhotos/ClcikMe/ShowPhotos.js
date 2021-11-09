import React    from "react";
import template from "./ShowPhotos.jsx";
import {connect} from 'react-redux';

class ShowPhotos extends React.Component {
  constructor(){
    super();
     this.state={
      userHeaders:["UserName","Email","Phone","Website"],
      userKeys:["username","email","phone","website"]
     }
  }
  render() {
    return template.call(this);
  }
}

ShowPhotos=connect((store)=>{
    return{
      dataarray:store.dataReducer.dataarray
    }
})(ShowPhotos);

export default ShowPhotos;
