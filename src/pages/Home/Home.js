import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../../assets/home.png";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="heading-1 home-title mb-sm">Eat more fruites</h1>
        <p className="content-text-1 mb-md">
          We take care of food so food can take care of you.
        </p>
        <Link to="/smoothies">
          <button className="btn home-btn">Get started</button>
        </Link>
      </div>
      <img className="home-image" src={homeImage} alt="Eat more fruites" />
    </div>
  );
}

export default Home;
