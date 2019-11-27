import React, { Component } from 'react';

class Smoothie extends Component {
    state = {
        imageFront: true
    }

    convertImage = (e) => {
        this.setState({
            imageFront: !this.state.imageFront
        })
    }

    render(){
        const { smoothie } = this.props;

        let smoothieImage;
        if(this.state.imageFront){
            smoothieImage = <img onMouseOver={this.convertImage} src={require(`../assets/smoothies/${smoothie.imgUrl}-1.jpeg`)} alt={smoothie.name} className="smoothies__image mb-sm"/>
        } else {
            smoothieImage = <img onMouseOut={this.convertImage} src={require(`../assets/smoothies/${smoothie.imgUrl}-2.jpeg`)} alt={smoothie.name} className="smoothies__image mb-sm"/>
        }

        return (
            <div className="smoothies__item">
                {smoothieImage}
                <h4 className="smoothies__name">{smoothie.name}</h4>
            </div>
        )
    }
}

export default Smoothie;