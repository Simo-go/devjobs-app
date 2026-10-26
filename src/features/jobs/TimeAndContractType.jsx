import clsx from "clsx";

function TimeAndContractType({ className }) {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center gap-x-2 gap-y-0 text-[#7F8FA4]",
        className,
      )}
    >
      <span className="shrink-0">5h ago</span>
      <span className="shrink-0">&middot;</span>
      <span className="shrink-0">Full Time</span>
    </div>
  );
}

export default TimeAndContractType;
