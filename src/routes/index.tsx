import React from "react";
import { Route, Switch } from "react-router-dom";

import CustomersContainer from "containers/customers";

interface RoutesProps {}

export const Routes: React.StatelessComponent<RoutesProps> = () => (
  <Switch>
    <Route path="/" exact={true} component={CustomersContainer} />
  </Switch>
);
