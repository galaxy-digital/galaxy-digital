import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { slice } from "./useStore";

import "./assets/css/grid.scss";
import "./assets/css/index.scss";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/layout/Layout";

const store = configureStore({ reducer: slice.reducer });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
