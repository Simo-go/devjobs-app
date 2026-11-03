import { useForm } from "react-hook-form";
import {
  HiArrowRightOnRectangle,
  HiEnvelope,
  HiLockClosed,
} from "react-icons/hi2";
import { Link } from "react-router";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import AuthDetails from "./AuthDetails";
import AuthForm from "./AuthForm";
import AuthFormHeader from "./AuthFormHeader";
import AuthInput from "./AuthInput";
import Socials from "./Socials";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  function onSubmit(data) {
    console.log(data);

    // signInWithEmail();
  }

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthFormHeader
        Icon={<HiArrowRightOnRectangle size={24} className="text-slate-900" />}
        title="Sign in with email"
        caption="Get back to applying for that new job!"
      />
      {/* // caption="Apply for your next developer job. For Free" */}
      <AuthDetails>
        <AuthInput
          Icon={HiEnvelope}
          type="email"
          id="email"
          autoComplete="email"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Provide an email" },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/g,
              message: "Incorrect email format",
            },
          })}
          errorMsg={errors.email?.message}
        />
        <AuthInput
          Icon={HiLockClosed}
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Password"
          className="mb-2"
          {...register("password", {
            required: {
              value: true,
              message: "Provide a password",
            },
            minLength: {
              value: 8,
              message: "Passowrd must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/gm,
              message: "Incorrect password format",
            },
          })}
          errorMsg={errors.password?.message}
        />
        <Link className="font-sm block text-right text-preset-5 text-xs font-normal text-slate-900/75 hover:text-slate-900">
          Forgot Password?
        </Link>
      </AuthDetails>
      <div className="mb-8 flex gap-3 justify-self-end">
        <Button
          type="button"
          size="normal"
          variant="outline"
          className="text-preset-5!"
          link
          to="/register"
        >
          Sign up
        </Button>
        <Form.Submit size="large" className="text-preset-5!">
          Log In
        </Form.Submit>
      </div>
      <Socials />
    </AuthForm>
  );
}

export default LoginForm;
