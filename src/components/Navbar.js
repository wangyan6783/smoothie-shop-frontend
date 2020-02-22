import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
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
          <li className="navbar-item">
            <Link className="navbar-link" to="/login">
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
