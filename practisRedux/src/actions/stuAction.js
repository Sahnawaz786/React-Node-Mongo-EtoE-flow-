import ServerCall from "../shared/ServerCall";
import store from '../store/myReduxstore';

const stuAction =()=>{
    ServerCall.fnSendGetReq('get-data',true)
    .then((res)=>{
        let data=res.data;
        // debugger;
        store.dispatch({
           type:'STUDENT',
           payload:typeof(data) == 'string' ? [] : data 
       })
    })

    .catch((res)=>{
        let data=res.data;
        store.dispatch({
            type:'STUDENT',
            payload:typeof(data) == 'string' ? [] : data 
        })
    })
}

export default stuAction;