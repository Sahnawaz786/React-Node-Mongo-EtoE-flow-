import { initloc } from "../utils/initData"; //exporting initial data from utils

const locReducer=(states=initloc,action)=>{  //creating a locReducer that update the loc int the store
      if(action.type == 'LOC'){
       states={
           ...states, //merging old data with one which need to be updated
           loc:action.loc  //updating loc from the newData
       }
    }

       return states;  //returing it so that we can use it the updated data
}

export default locReducer;  //exporting it so that we can use it some other place