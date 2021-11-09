import commentsSaga from '../sagas/commentsSaga';
import albumsSaga from '../sagas/albumsSaga';
import {all} from 'redux-saga/effects'; //all method of redux-saga/effects is use to merge all the generator method in a single generator method
import deleteSaga from './deleteSaga';

function* rootSaga(){
   return yield all([  //we need to return the all method
       commentsSaga(),
       albumsSaga(),
       deleteSaga()
   ])

//    we are returing the all method so that all the methods get stored in rootSaga and we can use it in the myReduxstore
}

export default rootSaga;

