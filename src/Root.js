import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";

import Router from "./route/Router";

import "./index.scss";

const Root = () => {
  return (
    <BrowserRouter basename="/">
      <Router />
    </BrowserRouter>
  );
};

export default Root;
