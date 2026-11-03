import {
  HiArrowRightOnRectangle,
  HiEnvelope,
  HiLockClosed,
} from "react-icons/hi2";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import DottedDivider from "../../ui/DottedDivider";
import Form from "../../ui/Form";
import AuthFormHeader from "./AuthFormHeader";
import AuthInput from "./AuthInput";
import Socials from "./Socials";
import { Link } from "react-router";

function LoginForm() {
  return (
    <Card className="mx-auto max-w-110 p-4 md:max-w-120 md:bg-neutral-0 md:p-10 md:pt-10">
      <Form>
        <AuthFormHeader
          Icon={
            <HiArrowRightOnRectangle size={24} className="text-slate-900" />
          }
          title="Sign in with email"
          caption="Apply for your next developer job. For Free"
        />
        <div className="mb-4 space-y-2">
          <AuthInput
            Icon={HiEnvelope}
            type="email"
            id="email"
            autocomplete="email"
            placeholder="Email"
          />
          <AuthInput
            Icon={HiLockClosed}
            type="password"
            id="password"
            autocomplete="current-password"
            placeholder="Password"
            className="mb-2"
          />
          <Link className="font-sm block text-right text-preset-5 text-xs font-normal text-slate-900/75 hover:text-slate-900">
            Forgot Password?
          </Link>
        </div>
        <div className="mb-8 flex gap-3 justify-self-end">
          <Button
            type="button"
            size="normal"
            variant="outline"
            className="text-preset-5 xs:text-preset-4-bold"
          >
            Sign up
          </Button>
          <Form.Submit
            size="normal"
            className="text-preset-5 xs:hidden xs:text-preset-4-bold"
          >
            Get Started
          </Form.Submit>
          <Form.Submit
            size="large"
            className="hidden text-preset-5 xs:block xs:text-preset-4-bold"
          >
            Get Started
          </Form.Submit>
        </div>
        <div className="mb-8 flex items-center gap-4">
          <DottedDivider />
          <span className="shrink-0 text-preset-5 font-normal text-slate-900/50">
            Or sign in with
          </span>
          <DottedDivider />
        </div>
        <Socials />
      </Form>
    </Card>
  );
}

export default LoginForm;
