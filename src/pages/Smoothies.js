import React, { Component } from 'react';
import Smoothie from '../components/Smoothie';

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

    render(){
        return (
            <div className="smoothies__list">
                {this.state.smoothies.map(smoothie => <Smoothie key={smoothie._id} smoothie={smoothie}/>)}
            </div>
        )
    }
}

export default Smoothies;