import React from "react";
import renderer from "react-test-renderer";
import Smoothie from "./Smoothie";

describe("Smoothie Component", () => {
  it("render correctly", () => {
    const smoothie = {
      name: "Tart Cherry + Raspberry",
      imgUrl: "tart-cherry-raspberry"
    };
    const smoothieComponent = renderer
      .create(<Smoothie smoothie={smoothie} />)
      .toJSON();
    expect(smoothieComponent).toMatchSnapshot();
  });
});
