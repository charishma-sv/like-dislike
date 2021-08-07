import React, { Component } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
class PublicRoute extends Component {
  render() {
    const { component: Component, user, ...props } = this.props;
    return (
      <Route
        {...props}
        render={() =>
          user ? <Redirect to="/random"></Redirect> : <Component />
        }
      />
    );
  }
}
export default PublicRoute;
