import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import "./App.css";
import Home from "./components/Home";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Header />
            <h1>Login Page</h1>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            {/* <h1>Welcome to Amazon</h1> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
