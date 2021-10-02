import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

import { createGlobalStyle } from 'styled-components'
import { createStore } from 'redux';
import { rootReducer } from './redux/root_reducer';
import { Provider } from 'react-redux';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  body {
    background-color: #1F2223;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
