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
import { MadeMe } from "./MadeMe";
import { ArabAyah } from "./store/quran";
import { SingleSurah } from "./screens/Quran/SingleSurah";
import { chapters } from "./store/ru";
import { Courses } from "./screens/Courses";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [quran, setQuran] = useState(ArabAyah);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="app">
      <Router>
        <Header />

        {/* <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} /> */}
        <Switch>
          <Route exact path="/">
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>

          <Route path="/menu">
              <MenuScreen />
          </Route>
          <Route path="/menu/featured">
            <Header />
            <FeaturedScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route path="/quran">
            <Quran chapters={chapters} />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/surah/:translation">
            <SingleSurah chapters={chapters} />
          </Route>
          <Route path='/courses:id' />
        </Switch>
        <MadeMe />
      </Router>
    </div>
  );
}

export default App;
