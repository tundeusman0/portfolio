import { Switch, Route } from 'react-router-dom';
import React from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Admin from '../components/admin/Admin';
import Register from '../components/admin/Register';
import Login from '../components/admin/Login';
import User from '../components/admin/User';
import Skills from '../components/admin/Skills';
import AdminResume from '../components/admin/resume/Resume';
import AddResume from '../components/admin/resume/AddResume';
import EditResume from '../components/admin/resume/EditResume';
import EditSkills from '../components/admin/EditSkills';
import EditProjects from '../components/admin/resume/EditProjects';
import Logo from '../components/admin/logo/Logo';
import Blog from '../components/admin/blog/Blog';
import AddBlog from '../components/admin/blog/AddBlog';
import EditBlog from '../components/admin/blog/EditBlog';
import NoMatch from '../components/NoMatch';

const AdminRouters = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/admin/admin" component={Admin} />
      <PublicRoute exact path="/admin/login" component={Login} />
      <PrivateRoute exact path="/admin/user" component={User} />
      <PrivateRoute exact path="/admin/skills" component={Skills} />
      <PrivateRoute exact path="/admin/logo" component={Logo} />
      <PrivateRoute exact path="/admin/blog" component={Blog} />
      <PrivateRoute exact path="/admin/add_blog" component={AddBlog} />
      <PrivateRoute exact path="/admin/edit_blog/:id" component={EditBlog} />
      <PrivateRoute exact path="/admin/resume" component={AdminResume} />
      <PrivateRoute exact path="/admin/add_resume" component={AddResume} />
      <PrivateRoute exact path="/admin/edit_resume" component={EditResume} />
      <PrivateRoute exact path="/admin/skills/:id" component={EditSkills} />
      <PrivateRoute exact path="/admin/projects/:id" component={EditProjects} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default AdminRouters;
