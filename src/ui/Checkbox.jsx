import clsx from "clsx";

function Checkbox({ className, ...props }) {
  return (
    <input
      {...props}
      className={clsx(
        className,
        "relative size-6 appearance-none rounded-sm bg-slate-900/10 transition-all duration-300 after:absolute after:top-0 after:left-0 after:block after:size-full after:rounded-sm after:bg-[url('/assets/mobile/icon-check.svg')] after:bg-center after:bg-no-repeat after:opacity-0 after:transition-all after:duration-300 checked:bg-indigo-500 checked:after:opacity-100 hover:cursor-pointer hover:after:opacity-100",
      )}
      type="checkbox"
    />
  );
}

export default Checkbox;
