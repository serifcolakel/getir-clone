import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/index";
// applyMiddleware is a function that takes an array of middleware functions
// and returns a single middleware function
// thunk is a middleware function that allows us to write action creators
// that return a function instead of an action

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
