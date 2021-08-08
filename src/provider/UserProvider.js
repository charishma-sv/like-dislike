import React, { Component } from 'react';
import { auth } from '../firebase';

export const UserContext = React.createContext({ user: null });
class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { user: undefined };
  }
  componentDidMount = async () => {
    auth.onAuthStateChanged((user) => {
      console.log('user state changed', user);
    });
  };
  render() {
    return (
      <UserContext.Provider value={{ user: this.state.user }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
