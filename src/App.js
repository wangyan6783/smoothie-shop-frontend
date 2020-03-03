import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Smoothies from "./pages/Smoothies";

function App() {
  const [loginUser, setLoginUser] = useState("");

  return (
    <Router>
      <div>
        <Navbar loginUser={loginUser} setLoginUser={setLoginUser} />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/home" exact render={() => <Home />} />
          <Route
            path="/login"
            exact
            render={() => <Login setLoginUser={setLoginUser} />}
          />
          <Route path="/signup" exact render={() => <Signup />} />
          <Route path="/smoothies" exact render={() => <Smoothies />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
