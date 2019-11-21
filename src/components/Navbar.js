import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item"><Link className="navbar__link" to="/">Browse</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/">Our Story</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/">Gifts</Link></li>
                    <li className="navbar__item navbar__item--logo"><Link className="navbar__logo" to="/">Daily Harvest</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/">Help</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/login">Login</Link></li>
                    <li className="navbar__item"><Link className="navbar__link" to="/">Get Started</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;