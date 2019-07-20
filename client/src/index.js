import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "App";
import ThemeWrapper from "ThemeWrapper";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import store from "./redux";
ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper>
      <App />
      <ToastContainer autoClose={2000} />
    </ThemeWrapper>
  </Provider>,
  document.getElementById("root")
);
