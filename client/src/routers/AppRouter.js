import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import DashBoard from '../components/DashBoard';
import NoMatch from '../components/NoMatch';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
