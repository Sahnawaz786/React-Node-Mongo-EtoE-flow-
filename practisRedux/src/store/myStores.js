import {combineReducers,createStore,applyMiddleware} from 'redux';

import logger from 'redux-logger';

import dataReducer from '../Reducers/dataReducer';

let allReducer = combineReducers({dataReducer});

let Middleware = applyMiddleware(logger);

let Mystores = createStore(allReducer,Middleware);


export default Mystores;