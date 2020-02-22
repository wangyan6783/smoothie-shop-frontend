import React, { useState, useEffect } from "react";
import Smoothie from "../components/Smoothie";
import SmoothieModal from "../components/SmoothieModal";

function Smoothies() {
  const [smoothies, setSmoothies] = useState([]);
  const [selectedSmoothie, setSelectedSmoothie] = useState(null);

  useEffect(fetchSmoothies, []);

  function fetchSmoothies() {
    fetch("http://localhost:5000/smoothies")
      .then(r => r.json())
      .then(smoothies => setSmoothies(smoothies));
  }

  function updateSmoothie(smoothie) {
    setSelectedSmoothie(smoothie);
  }

  return (
    <React.Fragment>
      <div className="smoothies-list">
        {smoothies.map(smoothie => (
          <Smoothie
            key={smoothie._id}
            smoothie={smoothie}
            updateSmoothie={updateSmoothie}
          />
        ))}
      </div>
      {selectedSmoothie && (
        <SmoothieModal
          smoothie={selectedSmoothie}
          updateSmoothie={updateSmoothie}
        />
      )}
    </React.Fragment>
  );
}

export default Smoothies;
