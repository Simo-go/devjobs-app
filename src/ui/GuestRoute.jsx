import { Navigate } from "react-router";
import useAuth from "../features/Auth/useAuth";
import LoadingSpinner from "./LoadingSpinner";

function GuestRoute({ children }) {
  const { isAuthenticated, isAuthenticating, authError } = useAuth();
  console.log(isAuthenticating, isAuthenticated);

  if (isAuthenticating) {
    return <LoadingSpinner className="mt-40" />;
  }

  if (isAuthenticated) return <Navigate to="home" />;

  if (authError || !isAuthenticated) return children;
}

export default GuestRoute;
