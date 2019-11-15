import React, { Component } from 'react';
import heroImg from '../assets/hero.png';

class Hero extends Component {
    render(){
        return (
            <div className="hero">
                <img src={heroImg} alt="smoothie shop hero image" />
                <h1>Eat more fruites + vegetables</h1>
                <p>We take care of food so food can take care of you.</p>
                <button>Get started</button>
            </div>
        )
    }
}

export default Hero;