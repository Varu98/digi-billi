import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  console.log(isLoggedIn);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiresAuth;
