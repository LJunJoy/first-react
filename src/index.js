import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './app/todo/reducer.js';
import App from './app/todo/app.js';

const store = createStore(reducer);
ReactDom.render(
      <Provider store={ store }>
        <App/>
      </Provider>, document.getElementById("root")
      );
