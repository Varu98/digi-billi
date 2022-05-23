export const onRefresh = (authDispatch) => {
  if (localStorage.getItem("token") !== null) {
    return authDispatch({ type: "LOGIN_PERSISTENT" });
  }
};
