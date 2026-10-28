import { SyncLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="self-center justify-self-center">
      <SyncLoader color="var(--color-indigo-500)" speedMultiplier={0.8} />
    </div>
  );
}

export default LoadingSpinner;
