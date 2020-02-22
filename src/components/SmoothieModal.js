import React from "react";

function SmoothieModal({ smoothie, updateSmoothie }) {
  function closeModal(e) {
    //event delegation
    if (e.target.matches("#smoothie-modal, #smoothie-close")) {
      updateSmoothie(null);
    }
  }

  return (
    <div className="modal" id="smoothie-modal" onClick={closeModal}>
      <div className="modal-content-container">
        <div className="modal-close">
          <span id="smoothie-close">x</span>
        </div>
        <div className="modal-content">
          <div className="modal-slot-1">
            <img
              src={require(`../assets/smoothies/${smoothie.imgUrl}-1.jpeg`)}
              alt={smoothie.name}
              className="modal-image"
            />
          </div>
          <div className="modal-slot-2">
            <div className="modal-title heading-2 mb-sm">{smoothie.name}</div>
            <div className="modal-subtitle content-text-1 mb-sm">
              Tastes Like: {smoothie.tastes}
            </div>
            <p className="modal-description content-text-2 mb-md">
              {smoothie.description}
            </p>
            <button className="btn modal-button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmoothieModal;
