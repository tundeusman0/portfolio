import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import DashBoard from '../components/DashBoard';
import ContactForm from '../components/ContactForm';
import NoMatch from '../components/NoMatch';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Resume from '../components/Resume';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/resume" component={Resume} />
        <Route exact component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
