// import initDatas from '..utils/initDatas';

import initDatas from '../utils/initDatas';

const dataReducer=(state=initDatas,action)=>{
    if(action.type == 'DATA'){
       state={
           ...state,
           dataarray:action.dataarray
       }
    }
    return state;
}

export default dataReducer;