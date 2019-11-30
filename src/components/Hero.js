import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
    render(){
        return (
            <div className="hero">
                <div className="hero__container">
                    <h1 className="heading-1 hero__title mb-sm">Eat more fruites + vegetables</h1>
                    <p className="content-text-1 mb-md">We take care of food so food can take care of you.</p>
                    <Link to="/smoothies"><button className="btn hero__btn">Get started</button></Link>
                </div>
            </div>
        )
    }
}

export default Hero;