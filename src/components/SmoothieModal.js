import React, { Component } from 'react';

class SmoothieModal extends Component {

    closeModal = (e) => {
        //event delegation
        if(e.target.id==="smoothie-modal" || e.target.id==="smoothie-close") {
            this.props.updateSmoothie(null);
        }
    }

    render(){
        const { smoothie } = this.props;
        return (
            <div className="modal" id="smoothie-modal" onClick={this.closeModal}>
                <div className="modal__content-container">
                    <div className="modal__close"><span id="smoothie-close">x</span></div>
                    <div className="modal__contents">
                        <div className="modal__image-container">
                            <img src={require(`../assets/smoothies/${smoothie.imgUrl}-1.jpeg`)} alt={smoothie.name} className="modal__image"/>
                        </div>
                        <div className="modal__text-container">
                            <div className="modal__title heading-2 mb-sm">{smoothie.name}</div>
                            <div className="modal__subtitle content-text-1 mb-sm">Tastes Like: {smoothie.tastes}</div>
                            <p className="modal__description content-text-2 mb-md">{smoothie.description}</p>
                            <button className="btn modal__button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SmoothieModal;