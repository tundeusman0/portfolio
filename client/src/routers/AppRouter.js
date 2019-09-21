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
import Admin from '../components/admin/Admin';
import Register from '../components/admin/Register';
import Login from '../components/admin/Login';
import User from '../components/admin/User';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Skills from '../components/admin/Skills';
import EditSkills from '../components/admin/EditSkills';

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
        <PrivateRoute exact path="/admin/admin" component={Admin} />
        <Route exact path="/admin/register" component={Register} />
        <PublicRoute exact path="/admin/login" component={Login} />
        <PrivateRoute exact path="/admin/user" component={User} />
        <PrivateRoute exact path="/admin/skills" component={Skills} />
        <PrivateRoute exact path="/admin/skills/:id" component={EditSkills} />
        <Route exact component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
