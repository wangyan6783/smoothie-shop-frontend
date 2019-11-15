import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item"><a className="navbar__link" href="#">Browse</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="#">Our Story</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="#">Gifts</a></li>
                    <li className="navbar__item navbar__item-logo"><a className="navbar__logo" href="#">Daily Harvest</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="#">Help</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="#">Login</a></li>
                    <li className="navbar__item"><a className="navbar__link" href="#">Get Started</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;