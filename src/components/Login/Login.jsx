import React, { useState } from "react";
import "./Login.css";
//icons
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  function validateform() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username or email
            <sup>*</sup>
          </label>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>
            Password <sup>*</sup>
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <span className="eye-icon" onClick={togglePasswordVisiblity}>
            {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>

        <button
          className="primary-btn"
          size="lg"
          type="submit"
          disabled={!validateform()}
        >
          Login
        </button>
        <div className="forgot-flex">
          <div className="remember-me">
            <input type="checkbox" />
            Remember Me
          </div>
          <div className="lost-password">
            <a href="/my-account/forgot-password">Lost your password ?</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
