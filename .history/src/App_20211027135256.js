import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { Footer } from "./Footer";
import { Fade } from "react-awesome-reveal";
import FeaturedScreen from "./screens/FeaturedScreen";
import HomeScreen from "./screens/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
// import SignupScreen from "./screens/SignupScreen";
import { Test } from "./screens/Test";
import { Api } from "./Api";
import Quran from "./screens/Quran/Quran";
import { MadeMe } from "./MadeMe";
// import { ArabAyah } from "./store/quran";
import { SingleSurah } from "./screens/Quran/SingleSurah";
import { chapters } from "./store/ru";
import { Courses } from "./screens/Courses";
import SingleCourse from "./SingleCourse";
import { coursesSidebar } from "./CoursesCategories";
import { SingleChapter } from "./screens/Quran/SingleChapter";
import Hadith from "./Hadith/Hadith";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [categoryData, setCategoryData] = useState(coursesSidebar);
  const [quranData, setQuranData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "http://api.alquran.cloud/v1/surah";
  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        const allData = res.data.data;
        console.log(allData);
        setQuranData(allData);
        setLoading(false);
      })
      .catch((error) => console.error(`error: ${error}`));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <Quran
              quranData={quranData}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/courses">
            <Courses categoryData={categoryData} />
          </Route>
          <Route
            exact
            path="/singlecourse/:id"
            component={SingleCourse}
            categoryData={categoryData}
          />
          <Route
            component={SingleSurah}
            path="/singlechapter/:number"
            quranData={quranData}
          />
          <Route component={Hadith} />
        </Switch>
        <MadeMe />
      </Router>
    </div>
  );
}

export default App;
