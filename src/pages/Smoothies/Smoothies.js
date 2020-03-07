import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Smoothie from "../../components/Smoothie/Smoothie";
import SmoothieModal from "../../components/SmoothieModal/SmoothieModal";

function Smoothies() {
  const [selectedSmoothie, setSelectedSmoothie] = useState(null);
  const { isLoading, fetchedData } = useFetch(
    "http://localhost:5000/smoothies"
  );
  const smoothies = fetchedData ? fetchedData : [];

  function updateSmoothie(smoothie) {
    setSelectedSmoothie(smoothie);
  }

  return (
    <React.Fragment>
      <div className="smoothies-list">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          smoothies.map(smoothie => (
            <Smoothie
              key={smoothie._id}
              smoothie={smoothie}
              updateSmoothie={updateSmoothie}
            />
          ))
        )}
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
