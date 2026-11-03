import clsx from "clsx";
import { SyncLoader } from "react-spinners";

function LoadingSpinner({ className }) {
  return (
    <div className={clsx(className, "self-center justify-self-center")}>
      <SyncLoader color="var(--color-indigo-500)" speedMultiplier={0.8} />
    </div>
  );
}

export default LoadingSpinner;
