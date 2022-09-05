import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";

export const Roter: VFC = memo(() => {
  return (
    <Switch exact path="/">
      <Route>
        <Login />
      </Route>
    </Switch>
  );
});
