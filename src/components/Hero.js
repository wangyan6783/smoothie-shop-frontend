import React, { Component } from 'react';
import heroImg from '../assets/hero.png';

class Hero extends Component {
    render(){
        return (
            <div className="hero">
                <div className="hero__container">
                    <h1 className="title-primary hero__title">Eat more fruites + vegetables</h1>
                    <p className=" content-primary hero__content">We take care of food so food can take care of you.</p>
                    <button className="btn hero__btn">Get started</button>
                </div>
            </div>
        )
    }
}

export default Hero;