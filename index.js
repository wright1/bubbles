import React from "react";
import { render } from "react-dom";
import App from "./src/components/app";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
