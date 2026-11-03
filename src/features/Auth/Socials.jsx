import { FaApple, FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import DottedDivider from "../../ui/DottedDivider";
import SocialButton from "./SocialButton";
import clsx from "clsx";

function Socials({ register, className }) {
  return (
    <div className={clsx(className)}>
      <div className="mb-8 flex items-center gap-4">
        <DottedDivider />
        <span className="shrink-0 text-preset-5 font-normal text-slate-900/50">
          Or sign {register ? "up" : "in"} with
        </span>
        <DottedDivider />
      </div>
      <div className="flex items-center justify-center gap-4">
        <SocialButton Icon={<FcGoogle />} />
        <SocialButton Icon={<FaApple className="text-slate-900" />} />
        <SocialButton Icon={<FaFacebook className="text-indigo-500" />} />
      </div>
    </div>
  );
}

export default Socials;
