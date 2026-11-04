import { useForm } from "react-hook-form";
import { replace, useNavigate } from "react-router";
import useLogin from "./useLogin";
import toast from "react-hot-toast";

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

    const toasterId = toast.loading("Logging in...");

    login(data, {
      onSuccess: ({
        user: {
          user_metadata: { first_name: firstName },
        },
      }) => {
        toast.success(`Welcome back, ${firstName}`, { id: toasterId });

        navigate("/home", { replace: true });
      },
      onError: (err) => {
        toast.success(err.message, { id: toasterId });

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
