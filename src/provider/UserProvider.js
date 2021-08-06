import React, { Component } from 'react';

export const UserContext = React.createContext(null);
class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { user: 'new user' };
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
