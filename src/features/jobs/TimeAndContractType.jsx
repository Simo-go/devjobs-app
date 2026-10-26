import clsx from "clsx";
import { capitalizeString } from "../../utils/helpers";

function TimeAndContractType({ className, createdAt, contract }) {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center gap-x-2 gap-y-0 text-[#7F8FA4]",
        className,
      )}
    >
      <span className="shrink-0">{createdAt}</span>
      <span className="shrink-0">&middot;</span>
      <span className="shrink-0">{capitalizeString(contract, "-")}</span>
    </div>
  );
}

export default TimeAndContractType;
