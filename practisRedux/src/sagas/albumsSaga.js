import {takeLatest,call,put} from 'redux-saga/effects';

import ServerCall from '../shared/ServerCall';

function* getAlbums(){
  const res = yield call(ServerCall.fnSendGetReq,'albums')

  yield put({
      type:'ALBUMS',
      payload:res.data
  })
}

function* setAlbums(){
    debugger;
}

function* albumsSaga(){
    yield takeLatest("GET_ALBUMS",getAlbums);
    yield takeLatest("SETALBUMS",setAlbums);
}

export default albumsSaga;