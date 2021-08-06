import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { UserContext } from './provider/UserProvider';
import Random from './components/Random';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './routes/ProtectedRoute';
function Application() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
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
