// import { act } from 'react-dom/test-utils';
import {initName} from '../utils/initData';

const nameReducer=(states=initName,action)=>{
    if(action.type == 'NAME'){
      states={
          ...states,
          name:action.name
      }
    }
      return states;
}

export default nameReducer;