import "./TableComp.css";
import React from "react";

function template() {
  const {header,data,keys} = this.props;
  return (
    <div className="table-comp">
      <h1>Users Datas</h1>
     { data.length > 0 ? <table border="2px">

      <tr>
      {
        header.map((value,index)=>{
             return <td>{value}</td>
        })
      }
      </tr>

      {

           data.map((obj,index)=>{
             return <tr key={index}>

               {
                 keys.map((val,index)=>{
                     return <td key={index}>{obj[val]}</td>
                 })
               }

             </tr>

           })

      }
      </table>
      :
      <h2>Loading.....</h2>
     }
    </div>
  );
};

export default template;
