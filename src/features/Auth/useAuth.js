import { useQuery } from "@tanstack/react-query";
import { getClaims } from "../../services/apiAuth";

function useAuth() {
  const {
    data: claims,
    isPending: isAuthenticating,
    error: authError,
  } = useQuery({
    queryKey: ["auth"],
    queryFn: getClaims,
    retry: 0,
  });

  const isAuthenticated = !!claims?.sub && claims.role === "authenticated";

  return {
    isAuthenticated,
    isAuthenticating,
    authError,
    userId: isAuthenticated ? claims.sub : null,
  };
}

export default useAuth;
