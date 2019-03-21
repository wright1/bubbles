import React from "react";
import { render } from "react-dom";
import { provider } from "react-redux";
import store from "./src/redux/store/index";
import { Provider } from "react-redux";
import App from "./src/components/app";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
