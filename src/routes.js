import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { App, Note, History } from './containers';

const Home = () => <div>Home</div>

const getRoutes = (store) => (
  <Router history={syncHistoryWithStore(browserHistory, store)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="note" component={Note} />
      <Route path="history" component={History} />
    </Route>
  </Router>
)

export default getRoutes
