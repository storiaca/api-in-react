import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/recipe" component={Recipe} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
