import React from "react";
import { useLocation } from "react-router-dom";

import "./MyAccount.css";
import Login from "../../components/Login/Login";
import LostPassword from "../../components/LostPassword/LostPassword";
const MyAccount = () => {
  const location = useLocation();
  const showLogin = location.pathname === "/my-account/";
  const showForgot = location.pathname === "/my-account/forgot-password";
  return (
    <>
      <div className="page-boxed">
        <div className="page-title">
          <p className="breadcrumb-title">My account</p>
        </div>
        <section>
          <div className="my-account-box">
            <div
              className="login-box"
              style={{ display: showLogin ? "block" : "none" }}
            >
              <h3>Login</h3>
              <Login />
            </div>
            <div
              className="lost-password-box"
              style={{ display: showForgot ? "block" : "none" }}
            >
              <p>
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>
              <LostPassword />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyAccount;
