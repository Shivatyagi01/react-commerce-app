import React from "react";
import "./LostPassword.css";
const LostPassword = () => {
  return (
    <div className="lost-password">
      <form>
        <div>
          <label>Username or email</label>
          <input type="text" />
        </div>
        <button className="primary-btn w-100">Reset Password</button>
      </form>
    </div>
  );
};

export default LostPassword;
