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
import { useLoginForm } from "./useLoginForm";
import { validations } from "../../utils/constants";

function LoginForm() {
  const { register, handleSubmit, errors } = useLoginForm();

  return (
    <AuthForm onSubmit={handleSubmit}>
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
          {...register("email", validations.email)}
          errorMsg={errors.email?.message}
        />
        <AuthInput
          Icon={HiLockClosed}
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Password"
          className="mb-2"
          {...register("password", validations.password)}
          errorMsg={errors.password?.message}
        />
        <Link className="font-sm block text-right text-preset-5 text-xs font-normal text-slate-900/75 hover:text-slate-900">
          Forgot Password?
        </Link>
      </AuthDetails>
      <div className="mb-8">
        {errors.root?.server && (
          <Form.Error className="mb-2 block text-right">
            {errors.root?.server.message}
          </Form.Error>
        )}
        <div className="flex gap-3 justify-self-end">
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
      </div>
      <Socials />
    </AuthForm>
  );
}

export default LoginForm;
