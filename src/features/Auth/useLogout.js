import { useMutation } from "@tanstack/react-query";
import { logOut as apiLogOut } from "../../services/apiAuth";

function useLogout() {
  const { mutate: logOut, isPending: IsLoggingOut } = useMutation({
    mutationFn: apiLogOut,
    onSuccess: (_, __, ___, { client: queryClient }) => {
      queryClient.invalidateQueries({ queryKey: ["user"] }); // do this in the auth change supabase listener later!!
    },
  });

  return { logOut, IsLoggingOut };
}

export default useLogout;
