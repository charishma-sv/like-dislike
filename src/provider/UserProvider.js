import React, { Component } from 'react';

export const UserContext = React.createContext({ user: null });
class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { user: 'new user' };
  }

  render() {
    return (
      <UserContext.Provider value={{ user: this.state.user }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
