import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './default.scss'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/createStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
