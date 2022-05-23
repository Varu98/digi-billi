import axios from "axios";

export const signupService = (e, signupData, authDispatch, navigate) => {
  e.preventDefault();

  (async () => {
    try {
      const { data, status } = await axios.post(`/api/auth/signup`, {
        ...signupData,
      });
      // saving the encodedToken in the localStorage
      authDispatch({
        type: "SIGNUP_DATA",
        payload: data,
      });
      console.log(data);
      // navigate to somewhere...
      if (status === 201) navigate("/login");
    } catch (error) {
      console.log("Signup: ", error);
    }
  })();
};
