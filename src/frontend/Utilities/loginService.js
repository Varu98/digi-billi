import axios from "axios";

export const loginService = (e, loginData, navigate, authDispatch, from) => {
  e.preventDefault();
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        ...loginData,
      });

      localStorage.setItem("token", data.encodedToken);

      authDispatch({
        type: "LOGIN",
        payload: data,
      });

      console.log(data, status);
      console.log(from);

      if (status === 200) navigate(from, { replace: true });
    } catch (error) {
      console.log("Login: ", error);
    }
  })();
  console.log(loginData);
};
