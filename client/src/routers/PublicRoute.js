import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ authentication, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      authentication ? <Redirect to="/admin/admin" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  authentication: !!state.auth.authentication
});
export default connect(mapStateToProps)(PrivateRoute);
