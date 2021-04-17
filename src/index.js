import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-state.js';
import { Provider } from 'react-redux';

 let renderEntireTree = (state) => {
  
  ReactDOM.render(    
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </Provider>
    ,
    document.getElementById('root')
  );}
  renderEntireTree(store.getState());
  store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state);
  });
