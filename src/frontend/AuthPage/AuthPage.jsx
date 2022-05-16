import { useAuth } from "../Contexts/AuthContext";
import { useState } from "react";
import "./AuthPage.css";
import { loginService } from "../Utilities/loginService";

const AuthPage = () => {
  const { navigate, authDispatch } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const loginDataHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({ ...prevLoginData, [name]: value }));
  };

  return (
    <div>
      <login-container className="flex-column">
        <form action="">
          <h2 className="align-center">Login</h2>
          <div className="login-content">
            <label htmlFor="email">Email address</label>
            <input
              onChange={loginDataHandler}
              name="email"
              type="text"
              placeholder="abc@abc.com"
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={loginDataHandler}
              name="password"
              type="password"
            />
          </div>
          <div className="login-footer">
            <label htmlFor="remember">
              <input type="checkbox" name="" id="" />
              Remember me
            </label>
            <div>Forgot Your Password?</div>
          </div>
          <button
            className="primary-btn"
            type="submit"
            onClick={(e) => loginService(e, loginData, navigate, authDispatch)}
          >
            Login
          </button>
          <button
            onClick={() => navigate("signup")}
            type="button"
            className="align-center secondary-btn"
          >
            Create New Account
          </button>
        </form>
      </login-container>
    </div>
  );
};

export default AuthPage;
