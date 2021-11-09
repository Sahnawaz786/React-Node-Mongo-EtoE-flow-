import React    from "react";
import template from "./Photos.jsx";
import axios from "axios";
import Mystore from "../store/myReduxstore";

class Photos extends React.Component {
  fnclick(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      let data=res.data;
       Mystore.dispatch({
          type:"DATA",
          dataarray:data
       })
    })
    .catch((res)=>{
        console.log(res);
    })
  }
  render() {
    return template.call(this);
  }
}

export default Photos;
