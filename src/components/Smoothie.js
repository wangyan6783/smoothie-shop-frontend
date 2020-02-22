import React, { Component } from "react";

class Smoothie extends Component {
  state = {
    imageFront: true
  };

  convertImage = e => {
    this.setState({
      imageFront: !this.state.imageFront
    });
  };

  renderSmoothieImage = smoothie => {
    if (this.state.imageFront) {
      return (
        <img
          onMouseOver={this.convertImage}
          src={require(`../assets/smoothies/${smoothie.imgUrl}-1.jpeg`)}
          alt={smoothie.name}
          className="smoothies-image mb-sm"
        />
      );
    } else {
      return (
        <img
          onMouseOut={this.convertImage}
          src={require(`../assets/smoothies/${smoothie.imgUrl}-2.jpeg`)}
          alt={smoothie.name}
          className="smoothies-image mb-sm"
        />
      );
    }
  };

  render() {
    const { smoothie, updateSmoothie } = this.props;

    return (
      <div className="smoothies-item" onClick={() => updateSmoothie(smoothie)}>
        {this.renderSmoothieImage(smoothie)}
        <h4 className="smoothies-name">{smoothie.name}</h4>
      </div>
    );
  }
}

export default Smoothie;
