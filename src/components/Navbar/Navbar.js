import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

function Navbar(props) {
  function renderLogin() {
    if (props.currentUser) {
      return (
        <li className="navbar-item">
          <Link className="navbar-link" to="/" onClick={props.signout}>
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

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(setCurrentUser(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
