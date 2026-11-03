import { useMutation } from "@tanstack/react-query";
import { signInWithEmail } from "../../services/apiAuth";

function useLogin() {
  const { isPending: isLoggingIn, mutate: login } = useMutation({
    mutationFn: (userData) => signInWithEmail(userData),
    onSuccess: (data, _, __, context) => {
      const queryClient = context.client;
      queryClient.setQueryData(["user"], data);
    },
  });

  return { isLoggingIn, login };
}

export default useLogin;
