import React from "react";
import { Switch, Route } from "react-router-dom";

import Cards from "./components/Cards";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Cards} />
    </Switch>
  );
};

export default App;
