export const authInitialState = {
  isLoggedIn: false,
  token: null,
  cart: [],
  wishlist: [],
};

export const authReducer = (authState, authDispatch) => {
  const { type, payload } = authDispatch;
  switch (type) {
    case "SIGNUP_DATA":
      return {
        ...authState,
        ...payload.createdUser,
        token: localStorage.getItem("token"),
      };
    case "LOGIN":
      return {
        ...authState,
        ...payload.foundUser,
        token: localStorage.getItem("token"),
        isLoggedIn: true,
      };
    case "LOGOUT":
      return { ...authInitialState };

    case "LOGIN_PERSISTENT":
      return { ...authState, isLoggedIn: true };

    default:
      return { ...authState };
  }
};
