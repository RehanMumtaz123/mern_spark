import React from "react";
import Nav from "./Components/Nav";
import Data from "./Components/data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Home />
          </Route>
          <Route path="/records">
            <Nav />
            <Data />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
