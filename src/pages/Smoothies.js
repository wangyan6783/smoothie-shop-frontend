import React, { Component } from 'react';
import Smoothie from '../components/Smoothie';
import SmoothieModal from '../components/SmoothieModal';

class Smoothies extends Component {

    state = {
        smoothies: [],
        selectedSmoothie: null
    }

    componentDidMount(){
        fetch("http://localhost:5000/smoothies")
        .then(r => r.json())
        .then(smoothies => {
            this.setState({smoothies});
        })
    }

    updateSmoothie = (smoothie) => {
        this.setState({
            selectedSmoothie: smoothie
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="smoothies-list">
                    {this.state.smoothies.map(smoothie => <Smoothie key={smoothie._id} smoothie={smoothie} updateSmoothie={this.updateSmoothie}/>)}
                </div>
                {this.state.selectedSmoothie && <SmoothieModal smoothie={this.state.selectedSmoothie} updateSmoothie={this.updateSmoothie}/>}
            </React.Fragment>
        )
    }
}

export default Smoothies;