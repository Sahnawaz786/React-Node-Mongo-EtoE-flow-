import "./Menu.css";
import React,{lazy,Suspense} from "react";
import {HashRouter,Route} from 'react-router-dom';

const BasicRedux = lazy(()=> import('../BasicRedux/index'))
const ReduxAction = lazy(()=> import('../ReduxAction/index'))
const ReduxThunk = lazy(()=> import('../ReduxThunk/index'))
const ReduxSaga = lazy(()=> import('../ReduxSaga/index'))
const ReduxForms = lazy(()=> import('../ReduxForms/index'))
const Photos = lazy(()=> import('../Photos/index'));
const ShowPhotos = lazy(()=> import('../ShowPhotos/index'));


function template() {
  return (
    <div>
      <div className="menu">
        <a href="#/react-basic">React Basic</a>
        <a href="#/react-action">React Action</a>
        <a href="#/react-thunk">React Thunk</a>
        <a href="#/react-saga">React Saga</a>
        <a href="#/react-forms">React forms</a>
        <a href="#/photos">Photos</a>
        <a href="#/show-photos">ShowPhotos</a>
      </div>

      <Suspense fallback="Loading...">
     <HashRouter>
      <div>

       {/* <Route pah='/' exact component={BasicRedux} /> */}
       <Route path='/' exact component={BasicRedux} />
       <Route path="/react-basic" component={BasicRedux} />
       <Route path="/react-action" component={ReduxAction} />
       <Route path="/react-thunk" component={ReduxThunk} />
       <Route path="/react-saga" component={ReduxSaga} />
       <Route path="/react-forms" component={ReduxForms} />
       <Route path='/photos' component={Photos} />
       <Route path='/show-photos' component={ShowPhotos} />

      </div>

     </HashRouter>
     </Suspense>
    </div>
  );
};

export default template;
