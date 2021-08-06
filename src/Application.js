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
  console.log(user);
  return (
    <BrowserRouter>
      <PublicRoute exact path="/" user={user} componen={Home} />
      <PublicRoute path="/login" user={user} componen={Login} />
      <PublicRoute path="/signup" user={user} componen={SignUp} />
      <ProtectedRoute path="/random" user={user} component={Random} />
      {/* <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      {user && (
        <Route path="/random">
          <Random />
        </Route>
      )} */}
    </BrowserRouter>
  );
}

export default Application;
