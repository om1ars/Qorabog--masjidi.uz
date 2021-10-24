import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header />
          <HomeScreen />
          <Fade></Fade>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
