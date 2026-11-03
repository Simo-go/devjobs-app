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

  return { user, isAuthenticating, authError };
}

export default useUser;
