import { useForm } from "react-hook-form";
import { replace, useNavigate } from "react-router";
import useLogin from "./useLogin";

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const { isLoggingIn, login } = useLogin();

  const navigate = useNavigate();

  async function onSubmit(data) {
    clearErrors("root.server");

    login(data, {
      onSuccess: () => {
        navigate("/home", { replace: true });
      },
      onError: (err) => {
        setError("root.server", {
          type: "server",
          message: err.message + ". Try again",
        });
      },
    });
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoggingIn,
  };
}
