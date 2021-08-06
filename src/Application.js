import React, { useContext } from 'react';
import { UserContext } from './provider/UserProvider';

function Application() {
  const { user } = useContext(UserContext);
  console.log('user', user);
  return <div>Application</div>;
}

export default Application;
