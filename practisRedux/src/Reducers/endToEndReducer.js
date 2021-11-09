import { endToEndinit } from "../utils/initData";

const endtoEndReducer =(state=endToEndinit,action)=>{
    // debugger;
       switch(action.type){
           case 'STUDENT':
               state={
                   ...state,
                   student:action.payload
               }
               break;
           case 'DATAFORM':
               state={
                   ...state,
                   formdata:action.payload,
                   isEdit:true
               }
               break;
           case 'CANCEL_EDIT':
               state={
                   ...state,
                   formdata:{},
                   isEdit:false
               }    
               break;
       }

    return state;
}


export default endtoEndReducer;