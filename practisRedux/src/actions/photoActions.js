// import store from '../store/myReduxstore';
import ServerCall from '../shared/ServerCall';

const photoActions=(dispatch)=>{
    ServerCall.fnSendGetReq('photos')
    .then((res)=>{
      dispatch({
          type:'PHOTOS',
          payload:res.data
      })
    })

    .catch((res)=>{

    })
}

export default photoActions;