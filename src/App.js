import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Smoothies from "./pages/Smoothies/Smoothies";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/home" exact render={() => <Home />} />
          <Route
            path="/login"
            exact
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
          <Route
            path="/signup"
            exact
            render={() => (currentUser ? <Redirect to="/" /> : <Signup />)}
          />
          <Route path="/smoothies" exact render={() => <Smoothies />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
