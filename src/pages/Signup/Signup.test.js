import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Signup from "./Signup";

describe("Signup Component", () => {
  it("render correctly", () => {
    const signupComponent = renderer
      .create(
        <Router>
          <Signup />
        </Router>
      )
      .toJSON();
    expect(signupComponent).toMatchSnapshot();
  });
});
