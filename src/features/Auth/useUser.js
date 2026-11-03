import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

function useUser() {
  const {
    data: user,
    isPending: isAuthenticating,
    error: authError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 0,
  });

  const isAuthenticated = user?.role === "authenticated";

  return { user, isAuthenticating, authError, isAuthenticated };
}

export default useUser;
