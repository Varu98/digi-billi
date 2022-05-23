export const logoutService = (authDispatch, navigate) => {
  localStorage.removeItem("token");
  authDispatch({ type: "LOGOUT" });
  navigate("/");
};
