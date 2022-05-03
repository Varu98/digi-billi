export const wishlistInitialState = {
  wishlistItems: [],
};

export const wishlistReducer = (wishlistState, wishlistAction) => {
  const { type, payload } = wishlistAction;
  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: [...wishlistState.wishlistItems, payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: [
          ...wishlistState.wishlistItems.filter(
            (product) => product._id !== payload
          ),
        ],
      };
    default:
      return [...wishlistState];
  }
};
