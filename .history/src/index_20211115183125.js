import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./store/Context";

ReactDOM.render(
  <React.StrictMode>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);

