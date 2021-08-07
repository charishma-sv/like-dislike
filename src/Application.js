import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { UserContext } from './provider/UserProvider';
import Random from './components/Random';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
function Application() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <PublicRoute exact path="/" user={user} component={Home} />
      <PublicRoute path="/login" user={user} component={Login} />
      <PublicRoute path="/signup" user={user} component={SignUp} />
      <ProtectedRoute path="/random" user={user} component={Random} />
    </BrowserRouter>
  );
}

export default Application;
