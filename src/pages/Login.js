import React, { Component } from 'react';
import heroImg from '../assets/hero.png';

class Login extends Component {
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
        fetch("http://localhost:5000/users/login", {
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
            <div className="login">
                <form className="login__form" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={this.handleUsername}></input>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" onChange={this.handlePassword}></input>
                    <button className="btn" type="submit">Login</button>
                    <p>Don't have an account?<a>Sign Up.</a></p>
                </form>
            </div>
        )
    }
}

export default Login;