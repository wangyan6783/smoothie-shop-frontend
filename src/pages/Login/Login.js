import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsername("");
    setPassword("");
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(r => r.json())
      .then(data => {
        console.log(data);
        if (data === "error") {
          setLoginError(true);
        } else {
          props.setCurrentUser({ username: data.username });
          props.history.push("/");
        }
      });
  }

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading-1 mb-md">Log in</h1>
        {loginError ? (
          <div className="form-error">Invalid username or password</div>
        ) : null}
        <div>
          <label className="form-text" htmlFor="login-username">
            Username
          </label>
          <input
            id="login-username"
            className="form-input"
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          ></input>
        </div>
        <div className="mb-sm">
          <label className="form-text" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            className="form-input mb-sm"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          ></input>
        </div>
        <button className="btn form-btn mb-sm" type="submit">
          Log in
        </button>
        <p className="form-text">
          {`Don't have an account? `}
          <Link className="form-link" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
