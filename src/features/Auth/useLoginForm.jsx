import { useForm } from "react-hook-form";
import { signInWithEmail } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit(data) {
    clearErrors("root.server");
    console.log(data);

    try {
      const user = await signInWithEmail(data); // change with react query
      // set user rigth here!
      console.log(user);
      navigate("/home");
    } catch (err) {
      setError("root.server", {
        type: "server",
        message: err.message + ". Try again",
      });
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    setError,
    clearErrors,
  };
}
