import { initData } from "../utils/initData";

const ActionReducer =(state=initData,action)=>{
       switch(action.type){
           case 'USER':
               state={
                   ...state,
                   users:action.payload
               }
               break;
           case 'PHOTOS':
               state={
                   ...state,
                   photos:action.payload
               }
               break;
           case 'POSTS':
               state={
                   ...state,
                   posts:action.payload
               }    
               break;
           case 'COMMENTS':
                state={
                    ...state,
                    comments:action.payload
                }    
                break;
           case 'ALBUMS':
               state={
                   ...state,
                   albums:action.payload
               }     
               break;
       }

    return state;
}


export default ActionReducer;