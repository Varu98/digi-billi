export const cartInitialState = {
  cartItems: [],
};

export const cartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cartItems: [...cartState.cartItems, cartAction.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cartItems: cartState.cartItems.filter(
          (product) => product._id !== cartAction.payload
        ),
      };

    default:
      return [...cartState];
  }
};
