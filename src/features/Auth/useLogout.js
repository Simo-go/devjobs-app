import { useMutation } from "@tanstack/react-query";
import { logOut as apiLogOut } from "../../services/apiAuth";

function useLogout() {
  const {
    mutate: logOut,
    isPending: IsLoggingOut,
    error,
  } = useMutation({
    mutationFn: apiLogOut,
    onSuccess: (_, __, ___, { client: queryClient }) => {
      // queryClient.setQueryData(["user"], null); // do this in the auth change supabase listener later!!
      // queryClient.setQueryData(["auth"], null);
    },
  });

  return { logOut, IsLoggingOut };
}

export default useLogout;
