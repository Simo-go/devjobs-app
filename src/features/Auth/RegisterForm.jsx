import { HiEnvelope, HiLockClosed, HiUserPlus } from "react-icons/hi2";
import AuthDetails from "./AuthDetails";
import AuthForm from "./AuthForm";
import AuthFormHeader from "./AuthFormHeader";
import AuthInput from "./AuthInput";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Socials from "./Socials";
import { Link } from "react-router";
import { signUpUser } from "../../services/apiAuth";

function RegisterForm() {
  return (
    <AuthForm onSubmit={signUpUser}>
      <AuthFormHeader
        title="Register now"
        caption="Start applying for that new job! For free."
        Icon={<HiUserPlus size={24} className="text-slate-900" />}
      />
      <AuthDetails className="mb-6">
        <AuthInput
          type="email"
          placeholder="Email"
          Icon={HiEnvelope}
          id="email"
          autoComplete="email"
        />

        <AuthInput
          type="password"
          placeholder="Password"
          Icon={HiLockClosed}
          id="password"
          autoComplete="current-password"
        />
        <AuthInput
          type="password"
          placeholder="Confirm Password"
          Icon={HiLockClosed}
          id="confirmPassword"
        />
      </AuthDetails>
      <div className="mb-8 flex gap-3 justify-self-end">
        <Form.Submit
          size="normal"
          className="text-preset-5! xs:text-preset-4-bold"
        >
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
