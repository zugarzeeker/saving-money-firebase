import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux/store';

import { App } from './containers';
import './index.css';

const history = syncHistoryWithStore(browserHistory, store)

const testDiv = () => <div>Hello</div>

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="app" component={testDiv} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
