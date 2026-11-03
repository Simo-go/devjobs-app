import { useForm } from "react-hook-form";
import { HiEnvelope, HiLockClosed, HiUserPlus } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";
import Form from "../../ui/Form";
import { validations } from "../../utils/constants";
import AuthDetails from "./AuthDetails";
import AuthForm from "./AuthForm";
import AuthFormHeader from "./AuthFormHeader";
import AuthInput from "./AuthInput";
import Socials from "./Socials";
import useSignUpUser from "./useSignUpUser";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { ClipLoader } from "react-spinners";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();

  function onError(error) {
    clearErrors("root.auth");

    setError("root.auth", {
      type: "server",
      message: "Registration failed, try again.",
    });
  }

  const { signUp, isCreatingUser } = useSignUpUser();

  // eslint-disable-next-line react-hooks/incompatible-library
  const password = watch("password", "");

  function onSubmit(data) {
    signUp(data, {
      onError: (error) => onError(error),
      onSuccess: () => {
        navigate("/confirm-account", { replace: true });
      },
    });
  }

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthFormHeader
        title="Register now"
        caption="Start applying for that new job! For free."
        Icon={<HiUserPlus size={24} className="text-slate-900" />}
      />
      <AuthDetails className="mb-6 space-y-3!">
        <AuthInput
          type="text"
          placeholder="First Name"
          id="firstName"
          {...register("firstName", validations.firstName)}
          className="py-2!"
          errorMsg={errors.firstName?.message}
        />
        <AuthInput
          type="text"
          placeholder="Last Name"
          id="lastName"
          {...register("lastName", validations.lastName)}
          className="py-2!"
          errorMsg={errors.lastName?.message}
        />
        <AuthInput
          type="email"
          placeholder="Email"
          Icon={HiEnvelope}
          id="email"
          autoComplete="email"
          {...register("email", validations.email)}
          className="py-2!"
          errorMsg={errors.email?.message}
        />
        <AuthInput
          type="password"
          placeholder="Password"
          Icon={HiLockClosed}
          id="password"
          autoComplete="current-password"
          {...register("password", validations.password)}
          className="py-2!"
          errorMsg={errors.password?.message}
        />
        <AuthInput
          type="password"
          placeholder="Confirm Password"
          Icon={HiLockClosed}
          id="confirmPassword"
          {...register("confirmPassword", {
            required: { value: true, message: "Confrim your password" },
            validate: (value, formValues) =>
              value === formValues.password || "Passwords do not match",
          })}
          className="py-2!"
          errorMsg={
            !errors.password?.message && errors.confirmPassword?.message
          }
          disabled={!!errors.password || !password}
        />
      </AuthDetails>
      <div className="mb-8 flex flex-col justify-self-end">
        {errors.root?.auth && (
          <Form.Error className="mb-2 block text-right">
            {errors.root?.auth.message}
          </Form.Error>
        )}
        <Form.Submit
          size="normal"
          className="text-preset-5! xs:text-preset-4-bold"
          disabled={isCreatingUser}
        >
          {isCreatingUser && (
            <ClipLoader className="mr-2" color="white" size={16} />
          )}
          Get Started
        </Form.Submit>
      </div>
      <Socials className="mb-4" />
      <p className="text-center text-preset-5 text-xs font-normal text-slate-900/50">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </AuthForm>
  );
}

export default RegisterForm;
