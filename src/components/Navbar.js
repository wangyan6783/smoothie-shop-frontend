import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar(props) {
  function renderLogin() {
    if (props.currentUser) {
      console.log("signedin");
      return (
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Sign Out
          </Link>
        </li>
      );
    } else {
      return (
        <li className="navbar-item">
          <Link className="navbar-link" to="/login">
            Login
          </Link>
        </li>
      );
    }
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/smoothies">
            Browse
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Our Story
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Gifts
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-logo" to="/">
            Daily Harvest
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Help
          </Link>
        </li>
        {renderLogin()}
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);
