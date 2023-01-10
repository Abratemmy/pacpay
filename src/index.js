import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";


import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import thunk from "redux-thunk";
import reducers from './pages/reducers';
const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);


