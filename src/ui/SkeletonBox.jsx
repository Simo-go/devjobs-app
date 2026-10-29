import clsx from "clsx";

function SkeletonBox({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-slate-200 not-motion-reduce:animate-pulse",
      )}
    >
      {children}
    </div>
  );
}

export default SkeletonBox;
