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
        token: payload.encodedToken,
      };
    case "LOGIN":
      return {
        ...authState,
        ...payload.foundUser,
        token: payload.encodedToken,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return { ...authInitialState };
    default:
      return { ...authState };
  }
};
