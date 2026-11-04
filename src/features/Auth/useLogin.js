import { useMutation } from "@tanstack/react-query";
import { signInWithEmail } from "../../services/apiAuth";
import { useNavigate } from "react-router";

function useLogin() {
  const navigate = useNavigate();

  const { isPending: isLoggingIn, mutate: login } = useMutation({
    mutationFn: (userData) => signInWithEmail(userData),
    onSuccess: (data, _, __, context) => {
      const queryClient = context.client;
      queryClient.setQueryData(["user"], data);
      navigate("/home", { replace: true });
    },
    onError: (error) => {},
  });

  return { isLoggingIn, login };
}

export default useLogin;
