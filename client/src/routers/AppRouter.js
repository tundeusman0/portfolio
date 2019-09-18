import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
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

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/chat" component={BlogPost} />
        <Route exact path="/admin/admin" component={Admin} />
        <Route exact path="/admin/register" component={Register} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
