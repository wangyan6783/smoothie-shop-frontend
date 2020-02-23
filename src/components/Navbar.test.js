import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("render correctly", () => {
    const navbarComponent = renderer
      .create(
        <Router>
          <Navbar />
        </Router>
      )
      .toJSON();
    expect(navbarComponent).toMatchSnapshot();
  });
});
