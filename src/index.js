import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import getRoutes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(store)}
  </Provider>,
  document.getElementById('root')
);
