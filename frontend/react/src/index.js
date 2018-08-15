import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import './index.css';
import AppContainer from './AppContainer';
import reducer from './reducer.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
