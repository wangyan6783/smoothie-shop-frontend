import React from "react";
import renderer from "react-test-renderer";
import SmoothieModal from "./SmoothieModal";

describe("SmoothieModal Component", () => {
  it("render correctly", () => {
    const smoothie = {
      name: "Tart Cherry + Raspberry",
      description:
        "This tangy smoothie hits hard with the tart bite of raspberries and sweet kick of our Mission Figs. Tart cherries and blueberries bring vibrant color to this antioxidant powerhouse, which helps put free-radicals in their place. Plus, the cherries help calm your system with anti-inflammatory properties and even help you sleep. Name another sorbet that can do that?",
      tastes: "Fresh Berry Sorbet",
      imgUrl: "tart-cherry-raspberry"
    };
    const smoothieModalComponent = renderer
      .create(<SmoothieModal smoothie={smoothie} />)
      .toJSON();
    expect(smoothieModalComponent).toMatchSnapshot();
  });
});
