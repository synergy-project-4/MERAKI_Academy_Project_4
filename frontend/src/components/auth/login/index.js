import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "./../../../contexts/login";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const loginContext = useContext(LoginContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginContext.login();
    if (loginContext.loggedIn) {
    }
  };
  return (
    <div className="login-body">
      <div className="login">
        <p style={{ color: "yellow", fontSize: "30px" }}>Website Name</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            className="input"
            type="email"
            placeholder="E-mail"
            onChange={(e) => loginContext.setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => loginContext.setPassword(e.target.value)}
          />
          <button className="done-button">Sign-In</button>
        </form>
        <p style={{ color: "white" }}>
          if you don't have an account, click&nbsp;
          <Link className="register-button" to="/register">
            here
          </Link>
        </p>
        {/* to fix the message to have succes and failure so each message would have a differnet color */}
        {loginContext.message && (
          <div style={{ backgroundColor: "red" }}>{loginContext.message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
