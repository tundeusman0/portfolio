import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashBoard from '../components/DashBoard';
import Register from '../components/admin/Register';
import ContactForm from '../components/ContactForm';
import NoMatch from '../components/NoMatch';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Resume from '../components/resume/Resume';
import Blogs from '../components/Blog/Blogs';
import BlogPost from '../components/Blog/BlogPost';
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
        <Route exact path="/blog" component={Blogs} />
        <Route exact path="/blog/:id" component={BlogPost} />
        <Route exact path="/chat" component={BlogPost} />
        <Route exact path="/admin/register" component={Register} />
        <AdminRouters />
        <Route exact component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
