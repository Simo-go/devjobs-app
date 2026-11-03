import { FcGoogle } from "react-icons/fc";
import Button from "../../ui/Button";
import { FaApple, FaFacebook } from "react-icons/fa6";
import SocialButton from "./SocialButton";

function Socials() {
  return (
    <div className="flex items-center justify-center gap-4">
      <SocialButton Icon={<FcGoogle />} />
      <SocialButton Icon={<FaApple className="text-slate-900" />} />
      <SocialButton Icon={<FaFacebook className="text-indigo-500" />} />
    </div>
  );
}

export default Socials;
