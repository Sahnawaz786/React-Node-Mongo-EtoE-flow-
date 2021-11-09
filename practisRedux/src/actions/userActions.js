import ServerCall from "../shared/ServerCall";
// import store from '../store/myReduxstore';

const userActions=(dispatch)=>{
   ServerCall.fnSendGetReq('users')
   .then((res)=>{
        dispatch({
           type:"USER",
           payload:res.data
       })
   })
   .catch(()=>{
    //   console.log(res.data);
   })
}

export default userActions;


