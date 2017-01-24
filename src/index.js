import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux/store';

import { App, Note, History } from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';

const history = syncHistoryWithStore(browserHistory, store)

const Home = () => <div>Home</div>

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="note" component={Note} />
        <Route path="history" component={History} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
