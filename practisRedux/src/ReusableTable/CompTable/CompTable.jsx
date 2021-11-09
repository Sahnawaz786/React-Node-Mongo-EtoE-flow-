import "./CompTable.css";
import React from "react";

function template() {
  const {header,keys,data,fnEdit,fndelete} = this.props;
  // debugger;

  return (
    <div className="CompTable">
    <h2>Students</h2>
      <div className="table-responsive">
     { data.length > 0 ?
     
      <table className="table table-bordered">
     <thead>
      <tr>
      {
        header.map((value,index)=>{
             return <td key={index}>{value}</td>
        })
      }
      <td>Edit</td>
      <td>Delete</td>
      </tr>
      </thead>

     <tbody>
      {

           data.map((obj,index)=>{
             return <tr key={index}>

               {
                 keys.map((val,index)=>{
                     return <td key={index}>{obj[val]}</td>
                 })
               }
               <td><button onClick={()=>fnEdit(obj)} className="btn btn-primary">Edit</button></td>
               <td><button onClick={()=>fndelete(obj)} className="btn btn-primary">Delete</button></td>
             </tr>

           })

      }
      </tbody>
      </table>
      :
      <h2>Loading.....</h2>
     }
     </div>
    </div>
  );
};



export default template;
