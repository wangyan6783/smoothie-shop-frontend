import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Home from "./Home";

describe("Home Component", () => {
  it("render correctly", () => {
    const homeComponent = renderer
      .create(
        <Router>
          <Home />
        </Router>
      )
      .toJSON();
    expect(homeComponent).toMatchSnapshot();
  });
});
