import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

function Signup(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(false);

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
    fetch("http://localhost:5000/users/signup", {
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
          setSignupError(true);
        } else {
          dispatch(setCurrentUser({ username: data.username }));
          props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="signup">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="heading-1 mb-md">Sign up</h1>
        {signupError ? (
          <div className="form-error">Username already taken</div>
        ) : null}
        <div>
          <label className="form-text" htmlFor="signup-username">
            Username
          </label>
          <input
            id="signup-username"
            className="form-input"
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          ></input>
        </div>
        <div className="mb-sm">
          <label className="form-text" htmlFor="signup-password">
            Password
          </label>
          <input
            id="signup-password"
            className="form-input mb-sm"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          ></input>
        </div>
        <button className="btn form-btn mb-sm" type="submit">
          Sign up
        </button>
        <p className="form-text">
          {`Already have an account? `}
          <Link className="form-link" to="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default withRouter(Signup);
