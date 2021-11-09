import React    from "react";
import template from "./ReduxSaga.jsx";
import store from '../store/myReduxstore';

class ReduxSaga extends React.Component {

  fngetComments(){
    store.dispatch({
      type:'GET_COMMENTS'  //in type value we have to pass the fn id that we want to use
    })
  }

  fngetAlbums(){
    store.dispatch({
      type:'GET_ALBUMS'
    })
  }

  render() {
    return template.call(this);
  }
}

export default ReduxSaga;
