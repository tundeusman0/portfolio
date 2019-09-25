import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashBoard from '../components/DashBoard';
import ContactForm from '../components/ContactForm';
import NoMatch from '../components/NoMatch';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Resume from '../components/Resume';
import Blog from '../components/Blog';
import BlogPost from '../components/BlogPost';
import AdminRouters from './AdminRouters';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/chat" component={BlogPost} />
        <AdminRouters />
        <Route exact component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
