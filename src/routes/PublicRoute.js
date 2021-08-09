import React, { Component } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';
class PublicRoute extends Component {
  render() {
    const { component: Component, user, ...props } = this.props;
    return (
      <Route
        {...props}
        render={() =>
          user === null ? (
            <LoadingComponent />
          ) : user ? (
            <Redirect to="/random"></Redirect>
          ) : (
            <Component />
          )
        }
      />
    );
  }
}
export default PublicRoute;
