import { useReducer, createContext, useContext } from "react";
import {
  wishlistReducer,
  wishlistInitialState,
} from "../Reducers/wishlistReducer";

const WishlistContext = createContext();

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  // wishlist reducer
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    wishlistInitialState
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
