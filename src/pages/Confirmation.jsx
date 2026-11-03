import { HiCheckCircle } from "react-icons/hi2";
import Card from "../ui/Card";

function Confirmation() {
  return (
    <Card className="mx-auto max-w-120 px-10 text-center md:p-10">
      <div className="mb-4 flex justify-center">
        <HiCheckCircle size={40} color="var(--color-indigo-500)" />
      </div>
      <h1 className="mb-1 text-preset-2 text-slate-900">Check your email</h1>
      <p className="text-preset-4 text-slate-900/50">
        We’ve sent you a confirmation link. Click the link in your email to
        confirm your account and sign in.
      </p>
    </Card>
  );
}

export default Confirmation;
