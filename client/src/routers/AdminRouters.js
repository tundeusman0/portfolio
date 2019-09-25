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
import ProjectForm from '../components/admin/resume/ProjectForm';
import NoMatch from '../components/NoMatch';

const AdminRouters = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/admin/admin" component={Admin} />
      <Route exact path="/admin/register" component={Register} />
      <PublicRoute exact path="/admin/login" component={Login} />
      <PrivateRoute exact path="/admin/user" component={User} />
      <PrivateRoute exact path="/admin/skills" component={Skills} />
      <PrivateRoute exact path="/admin/resume" component={AdminResume} />
      <PrivateRoute exact path="/admin/add_resume" component={AddResume} />
      <PrivateRoute exact path="/admin/edit_resume" component={EditResume} />
      <PrivateRoute exact path="/admin/skills/:id" component={EditSkills} />
      <PrivateRoute exact path="/admin/projects/:id" component={ProjectForm} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default AdminRouters;
