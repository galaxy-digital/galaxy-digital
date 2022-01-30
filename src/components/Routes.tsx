import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/";
import Details from "../pages/details/Details";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details" exact component={Details} />
    </Switch>
  );
};

export default Routes;
