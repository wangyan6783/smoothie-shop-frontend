import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Smoothies from "./pages/Smoothies/Smoothies";

function App(props) {
  console.log(props);
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
            render={() => (props.currentUser ? <Redirect to="/" /> : <Login />)}
          />
          <Route
            path="/signup"
            exact
            render={() =>
              props.currentUser ? <Redirect to="/" /> : <Signup />
            }
          />
          <Route path="/smoothies" exact render={() => <Smoothies />} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
