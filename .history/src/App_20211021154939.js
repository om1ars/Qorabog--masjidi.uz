import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./screens/HomeScreen";
import { Footer } from "./components/Footer";
import  {HEader} from './components/Header'


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <HEader />
          <HomeScreen />
          <Fade>
            <Footer />
          </Fade>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
