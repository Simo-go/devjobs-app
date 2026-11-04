import { Navigate } from "react-router";
import useAuth from "../features/Auth/useAuth";
import LoadingSpinner from "./LoadingSpinner";

function AuthenticatedRoute({ children }) {
  const { isAuthenticated, isAuthenticating, authError } = useAuth();

  if (authError) return <Navigate to="/login" replace />;

  if (isAuthenticating) {
    return <LoadingSpinner className="mt-40" />;
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}

export default AuthenticatedRoute;
