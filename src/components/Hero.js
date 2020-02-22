import React, { Component } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <h1 className="heading-1 hero-title mb-sm">Eat more fruites</h1>
          <p className="content-text-1 mb-md">
            We take care of food so food can take care of you.
          </p>
          <Link to="/smoothies">
            <button className="btn hero-btn">Get started</button>
          </Link>
        </div>
        <img className="hero-image" src={heroImage} />
      </div>
    );
  }
}

export default Hero;
