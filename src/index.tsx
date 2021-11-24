import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./components/app/index";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
