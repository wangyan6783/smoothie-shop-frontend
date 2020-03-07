import React, { useState } from "react";

function Smoothie({ smoothie, updateSmoothie }) {
  const [imageName, setImageName] = useState("1");

  function convertImage() {
    imageName === "1" ? setImageName("2") : setImageName("1");
  }

  return (
    <div className="smoothies-item" onClick={() => updateSmoothie(smoothie)}>
      <img
        onMouseOver={convertImage}
        onMouseOut={convertImage}
        src={require(`../../assets/smoothies/${smoothie.imgUrl}-${imageName}.jpeg`)}
        alt={smoothie.name}
        className="smoothies-image mb-sm"
      />
      <h4 className="smoothies-name">{smoothie.name}</h4>
    </div>
  );
}

export default Smoothie;
