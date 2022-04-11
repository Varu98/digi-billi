import React from "react";
import "./AuthPage.css";

const AuthPage = () => {
  return (
    <div>
      <login-container class="flex-column">
        <form action="">
          <h2 class="align-center">Login</h2>
          <div class="login-content">
            <label for="email">Email address</label>
            <input type="text" placeholder="abc@abc.com" />
            <label for="password">Password</label>
            <input type="password" />
          </div>
          <div class="login-footer">
            <label for="remember">
              <input type="checkbox" name="" id="" />
              Remember me
            </label>
            <div>Forgot Your Password?</div>
          </div>
          <button class="primary-btn" type="submit">
            Login
          </button>
          <div class="align-center">Create New Account</div>
        </form>
      </login-container>
    </div>
  );
};

export default AuthPage;
