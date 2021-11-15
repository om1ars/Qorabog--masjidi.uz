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
import { Fade } from "react-awesome-reveal";
import FeaturedScreen from "./screens/FeaturedScreen";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import Quran from "./screens/Quran/Quran";
import { MadeMe } from "./MadeMe";
import { SingleSurah } from "./screens/Quran/SingleSurah";
import { Courses } from "./screens/Courses";
import SingleCourse from "./SingleCourse";
import { coursesSidebar } from "./CoursesCategories";
import Hadith from "./Hadith/Hadith";
import SingleHadithChapter from "./Hadith/SingleHadithChapter";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuranAsync } from "./redux/slices/quranSlice";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [categoryData, setCategoryData] = useState(coursesSidebar);
  const [quranData, setQuranData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://api.alquran.cloud/v1/surah";
  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        const allData = res.data.data;
        // console.log(allData);
        setQuranData(allData);
        setLoading(false);
      })
      .catch((error) => console.error(`error: ${error}`));
  };

  const testQuran = useSelector((state) => state.quran.quran);


  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    dispatch(fetchQuranAsync());
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
            <Fade></Fade>
          </Route>

          <Route path="/menu">
            <MenuScreen />
          </Route>
          <Route path="/menu/featured">
            <Header />
            <FeaturedScreen />
            <Fade></Fade>
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
          <Route component={Hadith} path="/hadith" />
          <Route
            component={SingleHadithChapter}
            path="/hadithCahpter:Book_ID"
          />
        </Switch>
        <MadeMe />
      </Router>
    </div>
  );
}

export default App;
