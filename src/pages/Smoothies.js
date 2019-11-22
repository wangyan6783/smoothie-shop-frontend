import React, { Component } from 'react';

class Smoothies extends Component {

    state = {
        smoothies: []
    }

    componentDidMount(){
        fetch("http://localhost:5000/smoothies")
        .then(r => r.json())
        .then(smoothies => {
            this.setState({smoothies});
        })
    }

    renderSmoothie(smoothie) {
        return (
            <div className="smoothies__item">
                <img src={require(`../assets/smoothies/${smoothie.imgUrl}-1.jpeg`)} alt={smoothie.name} className="smoothies__image"/>
                <h4 className="smoothies__name">{smoothie.name}</h4>
            </div>
        )
    }

    render(){
        return (
            <div className="smoothies__list">
                {this.state.smoothies.map(smoothie => this.renderSmoothie(smoothie))}
            </div>
        )
    }
}

export default Smoothies;