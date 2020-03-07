import React from "react";
import renderer from "react-test-renderer";
import Smoothies from "./Smoothies";

describe("Smoothies Component", () => {
  it("render correctly", () => {
    const smoothiesComponent = renderer.create(<Smoothies />).toJSON();
    expect(smoothiesComponent).toMatchSnapshot();
  });
});
