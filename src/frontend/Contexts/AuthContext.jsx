import { useContext, useReducer, useEffect, createContext } from "react";
import { authInitialState, authReducer } from "../Reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { onRefresh } from "../Utilities/onRefresh";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  useEffect(() => {
    onRefresh(authDispatch);
  }, []);

  return (
    <AuthContext.Provider value={{ navigate, authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
