import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../services/apiAuth";

export default function useSignUpUser() {
  const {
    data,
    mutate: signUp,
    isPending: isCreatingUser,
  } = useMutation({
    mutationFn: (userData) => signUpUser(userData),
  });

  return { data, signUp, isCreatingUser };
}
