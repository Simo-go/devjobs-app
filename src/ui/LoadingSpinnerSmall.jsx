import clsx from "clsx";
import { ClipLoader } from "react-spinners";

function LoadingSpinnerSmall({ className, color, size }) {
  return <ClipLoader className={clsx(className)} color={color} size={size} />;
}

export default LoadingSpinnerSmall;
