import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import './index.css';
import {createStore,applyMiddleware} from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux'
import App from './components/app/App'
 
const store=createStore(allReducers,applyMiddleware(thunk))

ReactDOM.render(
  
  //make store available to app as such it wil b available to all components
  
  <Provider store={store}> 
    <App/>
  </Provider>,
  document.getElementById('root')
);

