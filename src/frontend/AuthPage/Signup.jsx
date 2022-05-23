import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { signupService } from "../Utilities/signupService";
import "./Signup.css";

const AuthPage = () => {
  const { authDispatch, navigate } = useAuth();

  const [signupData, setSignupData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const signupHandler = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="fix-width flex-center">
      <form className="input_form " autoComplete="off">
        <fieldset className="input_fieldset  ">
          <input
            autoComplete="off"
            type="text"
            id="firstName"
            name="fName"
            onChange={signupHandler}
          />
          <label htmlFor="firstName">First Name</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <fieldset className="input_fieldset  ">
          <input
            autoComplete="off"
            type="text"
            id="lastName"
            name="lName"
            onChange={signupHandler}
          />
          <label htmlFor="lastName">Last Name</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <fieldset className="input_fieldset  ">
          <input
            autoComplete="off"
            type="password"
            id="address"
            name="password"
            onChange={signupHandler}
          />
          <label htmlFor="address">Password</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <fieldset className="input_fieldset  ">
          <input
            autoComplete="off"
            type="text"
            id="email"
            name="email"
            onChange={signupHandler}
          />
          <label htmlFor="email">Email</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <button
          type="submit"
          onClick={(e) => signupService(e, signupData, authDispatch, navigate)}
          className="primary-btn"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
