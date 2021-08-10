import React, { Component } from 'react';
import { auth, getUserDocument } from '../firebase';

export const UserContext = React.createContext({ user: null });
class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
  }
  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await getUserDocument(userAuth);
      this.setState({ user });
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
