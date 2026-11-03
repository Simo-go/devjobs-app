import { Navigate, Outlet } from "react-router";
import useUser from "../features/Auth/useUser";
import LoadingSpinner from "./LoadingSpinner";

function ProtectedRoute() {
  const { user, isAuthenticating, authError } = useUser();
  console.log(user, isAuthenticating, authError);

  if (authError) return <Navigate to="/login" replace />;

  if (isAuthenticating) {
    return <LoadingSpinner className="mt-40" />;
  }

  if (!user) return <Navigate to="/home" replace />;

  return <Outlet />;
}

export default ProtectedRoute;
