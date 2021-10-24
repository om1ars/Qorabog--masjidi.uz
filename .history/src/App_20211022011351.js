import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Footer } from "./Footer";
import { Fade } from "react-awesome-reveal";
import FeaturedScreen from "./screens/FeaturedScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import SignupScreen from "./screens/SignupScreen";
import { Test } from "./screens/Test";
import { Api } from "./Api";
import Quran from "./screens/Quran/Quran";

function App() {

  const [showNavbar, setShowNavbar] = useState(false)
  const changeNavbarColor = () => {
    if(window.scrollY >= 100) {
      setShowNavbar(true)
    }
  }
 

  return (
    <div className="app">
      <Router>
        <Api />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route path="/account/signin">
            <LoginScreen />
          </Route>
          <Route path="/account/create">
            <SignupScreen />
          </Route>
          <Route path="/menu">
            <>
              <Header menuPage />
              <MenuScreen />
            </>
          </Route>
          <Route path="/menu/featured">
            <Header />
            <FeaturedScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/quran">
            <Quran />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
