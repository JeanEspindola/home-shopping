import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { loadCategoryList } from './actions/categoryAction';
import { loadCurrencyList } from './actions/currencyAction';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.dispatch(loadCategoryList());
store.dispatch(loadCurrencyList());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
