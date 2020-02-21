import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1 className="heading-1 mb-md">Log in</h1>
                    <div>
                        <label className="form-text" htmlFor="username">Username</label>
                        <input className="form-input" type="text" name="username" onChange={this.handleUsername}></input>
                    </div>
                    <div className="mb-sm">
                        <label className="form-text" htmlFor="password">Password</label>
                        <input className="form-input mb-sm" type="text" name="password" onChange={this.handlePassword}></input>
                    </div>
                    <button className="btn form-btn mb-sm" type="submit">Log in</button>
                    <p className="form-text">Don't have an account? <Link className="form-link" to="/signup">Sign Up</Link></p>
                </form>
            </div>
        )
    }
}

export default Login;