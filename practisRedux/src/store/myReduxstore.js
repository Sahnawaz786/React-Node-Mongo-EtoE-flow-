import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

import allReducer from '../rootReducer/rootReducer';

import thunk from 'redux-thunk'; // importing thunk to use it as a middlewares

import createSagaMiddleware from 'redux-saga'; //createSagaMiddleware is used for creating the saga middleware

import rootSaga from '../sagas/rootSagas';


// import nameReducer from '../Reducers/nameReducer';
// import locReducer from '../Reducers/locReducer';
// import dataReducer from '../Reducers/dataReducer';
// import ActionReducer from '../Reducers/ActionReducer';

// let allReducer = combineReducers({ //combineReducer takes only one arguments that's obj
//     nameReducer,
//     locReducer,
//     dataReducer,

// })

let SagaMiddleware = createSagaMiddleware();  //creating the middleware using the createSagaMiddleware method

let milddlewares = applyMiddleware(logger,thunk,SagaMiddleware); //passing it and regestring it

let Mystore = createStore(allReducer,milddlewares);  //to use a function as an reducer we have to register that func within the store

//createstore method is used to create a store in Redux

SagaMiddleware.run(rootSaga); //after registration we need all the generator method to be up an running so we have been provided a method call run which take rootSaga i.e all the genertor function and run's it...

export default Mystore;



