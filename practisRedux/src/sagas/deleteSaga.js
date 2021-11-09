import {takeLatest,call} from 'redux-saga/effects';
import ServerCall from '../shared/ServerCall';
import stuAction from '../actions/stuAction';

function* DeleteData(rowdata){
    debugger;
    let res = yield call(ServerCall.fnSendGetReq,'delete-std?id='+rowdata.rowdata._id,true);
    if(res.data.deletedCount > 0){
        alert('DATA DELETED SUCCESFULLY');
        stuAction();
    }else{
        alert('DATA DELETION FAILED!');
    }
}

function* deleteSaga(){
    yield takeLatest('DELETE_DATA',DeleteData);
}

export default deleteSaga;