import { combineReducers } from 'redux';

import nameReducer from '../Reducers/nameReducer';
import locReducer from '../Reducers/locReducer';
import dataReducer from '../Reducers/dataReducer';
import ActionReducer from '../Reducers/ActionReducer';
import endtoEndReducer from '../Reducers/endToEndReducer';
import {reducer as form} from 'redux-form';


let allReducer = combineReducers({
    nameReducer,
    locReducer,
    dataReducer,
    ActionReducer,
    form,
    endtoEndReducer
    //form:form(reducer) //simple way of writing key and value pair
    //to use reducer redux-form people says that don't use any key pls use form bec we are retreivng the data using the form key only

})

export default allReducer;