import { Navigate } from "react-router";
import useUser from "../features/Auth/useUser";
import LoadingSpinner from "./LoadingSpinner";

function AuthenticatedRoute({ children }) {
  const { user, isAuthenticating, authError } = useUser();
  console.log(user, isAuthenticating, authError);

  if (authError) return <Navigate to="/login" replace />;

  if (isAuthenticating) {
    return <LoadingSpinner className="mt-40" />;
  }

  if (!user) return <Navigate to="/home" replace />;

  return children;
}

export default AuthenticatedRoute;
