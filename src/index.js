import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/Restaurant/App";
//import registerServiceWorker from "./registerServiceWorker";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
//registerServiceWorker();
