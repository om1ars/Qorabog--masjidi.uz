import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { Footer } from "./Footer";
import { Fade } from "react-awesome-reveal";
import FeaturedScreen from "./screens/FeaturedScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import SignupScreen from "./screens/SignupScreen";
import { Test } from "./screens/Test";
import { Api } from "./Api";

function App() {
  const [user, setUser] = useState(true);
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       // User is signed in
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //         })
  //       );
  //     } else {
  //       // User is signed out
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);

  return (
    <div className="app">
      <Router>
      <Api />
        <Switch>
          <Route exact path="/">
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route  path="/account/signin">
            <LoginScreen />
          </Route>
          <Route  path="/account/create">
            <SignupScreen />
          </Route>
          <Route  path="/menu">
            <>
              <Header menuPage />
              <MenuScreen />
            </>
          </Route>
          <Route  path="/menu/featured">
            <Header />
            <FeaturedScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
          <Route path='/'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
