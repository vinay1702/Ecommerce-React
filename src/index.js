import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./Helpers/AppRouters";
import Store from "./store";
import "antd/dist/antd.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
  rootElement
);
