import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Login from "./Login";

describe("Login Component", () => {
  it("render correctly", () => {
    const loginComponent = renderer
      .create(
        <Router>
          <Login />
        </Router>
      )
      .toJSON();
    expect(loginComponent).toMatchSnapshot();
  });
});
