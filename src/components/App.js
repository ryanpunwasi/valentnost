import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";

import Nav from "./Nav";
import StartRoute from "./StartRoute";
import PracticeRoute from "./PracticeRoute";
import MasteredRoute from "./MasteredRoute";

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Nav />
        <Switch>
          <Route path="/" exact component={StartRoute} />
          <Route path="/practice" exact component={PracticeRoute} />
          <Route path="/mastered" exact component={MasteredRoute} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
