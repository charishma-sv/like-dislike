import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;
    const user = props.user;
    return (
      <Route
        {...props}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
}
export default ProtectedRoute;
