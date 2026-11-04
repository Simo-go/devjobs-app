import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

function useUser() {
  const {
    data: user,
    isPending: isLoadingUser,
    error: userError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const isAuthenticated = user?.role === "authenticated";

  return { user, isLoadingUser, userError, isAuthenticated };
}

export default useUser;
