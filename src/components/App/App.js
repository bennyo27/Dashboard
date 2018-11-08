import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Welcome from "../Welcome/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Signup} />
      </div>
    );
  }
}

export default App;
