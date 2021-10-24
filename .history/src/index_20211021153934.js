import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrrserRouter>
        <App />
      </BrrserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
