import React, { Component } from 'react';
import { auth, getUserDocument } from '../firebase';

export const UserContext = React.createContext({ user: null });
class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { user: undefined };
  }
  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      console.log('user state changed', userAuth);
      const user = await getUserDocument(userAuth);
      console.log('user after state change', user);
      this.setState(user);
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
