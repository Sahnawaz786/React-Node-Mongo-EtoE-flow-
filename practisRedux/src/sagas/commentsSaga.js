import {takeLatest,put,call} from 'redux-saga/effects';
import Servercall from '../shared/ServerCall';
//takelatest is used so that if the user click the button 10 times then don't send 10 request send the latest one that is the use of takelatest

//call is a method that takes first argument as the function and after that we can pass the argument the passed function takes it is the replacement of Servercall.fnsendgetpost() methods

//put works as dispatch method

function* getComments(){
  let res = yield call(Servercall.fnSendGetReq,'comments');

 yield put({
    type:'COMMENTS',
    payload:res.data
  })

}

function* setComments(){
   debugger;
}

function* CommentSaga(){
  yield takeLatest("GET_COMMENTS",getComments); //takelatest takes two arguments one is id and the other is fnname

//   saga people says that when you use my predefined method then simply yield it i will take care of it
  yield takeLatest('SETCOMMENTS',setComments);
}

export default CommentSaga;