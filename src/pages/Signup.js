import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
    state = {
        username: "",
        password: ""
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/users/signup", {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    render(){
        return (
            <div className="signup">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1 className="heading-1 mb-md form__title">Sign up</h1>
                    <label className="form__label" htmlFor="username">Username</label>
                    <input className="form__input" type="text" name="username" onChange={this.handleUsername}></input>
                    <label className="form__label" htmlFor="password">Password</label>
                    <input className="form__input mb-sm" type="text" name="password" onChange={this.handlePassword}></input>
                    <button className="btn form__btn mb-sm" type="submit">Sign up</button>
                    <p className="form__text">Already have an account? <Link className="form__link" to="/login">Log In</Link></p>
                </form>
            </div>
        )
    }
}

export default Signup;