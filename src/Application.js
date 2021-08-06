import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { UserContext } from './provider/UserProvider';
import Random from './components/Random';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function Application() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Route exact path="/">
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
      )}
      {/* <Route exact path="/">
        {user ? <Random /> : <Home />}
      </Route>
      <Route path="/login">{user ? <Random /> : <Login />}</Route>
      <Route path="/signup">{user ? <Random /> : <SignUp />}</Route>
      <Route path="/random">{user ? <Random /> : <Home />}</Route> */}
    </BrowserRouter>
  );
}

export default Application;
