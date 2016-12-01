import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);