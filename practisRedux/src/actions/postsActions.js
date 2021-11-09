 import ServerCall from "../shared/ServerCall";

 const postAction=()=>{
     debugger;
     return (dispatch,getstate)=>{
           ServerCall.fnSendGetReq('posts')
           .then((res)=>{
                dispatch({
                    type:'POSTS',
                    payload:res.data
                })
           })

           .catch((res)=>{
              console.log(res.data);
           })
     }
 }


 export default postAction;