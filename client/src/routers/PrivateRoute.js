import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ authentication, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      authentication ? <Component {...props} /> : <Redirect to="/admin/login" />
    }
  />
);

const mapStateToProps = state => ({
  authentication: !!state.auth.authentication
});
export default connect(mapStateToProps)(PrivateRoute);
