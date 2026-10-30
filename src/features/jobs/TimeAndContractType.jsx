import clsx from "clsx";
import { Temporal } from "temporal-polyfill";
import { capitalizeString, formatDurationFromNow } from "../../utils/helpers";

function TimeAndContractType({ className, createdAt, contract }) {
  const formattedTime = formatDurationFromNow(createdAt);

  return (
    <div
      className={clsx(
        "flex flex-wrap items-center gap-x-2 gap-y-0 text-[#7F8FA4]",
        className,
      )}
    >
      <span className="shrink-0">{formattedTime}</span>
      <span className="shrink-0">&middot;</span>
      <span className="shrink-0">{capitalizeString(contract, "-")}</span>
    </div>
  );
}

export default TimeAndContractType;
