import { Navigate } from "react-router";
import useUser from "../features/Auth/useUser";
import LoadingSpinner from "./LoadingSpinner";

function GuestRoute({ children }) {
  const { isAuthenticating, user, error } = useUser();

  if (isAuthenticating) {
    return <LoadingSpinner className="mt-40" />;
  }

  if (user) return <Navigate to="home" />;

  if (error || !user) return children;
}

export default GuestRoute;
