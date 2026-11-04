import clsx from "clsx";

function Input({ className, ref, ...props }) {
  return (
    <input
      className={clsx(
        className,
        "w-full truncate text-preset-4-regular text-slate-900 outline-0 placeholder:text-slate-900/50 placeholder-shown:text-ellipsis autofill:shadow-[inset_0_0_0_1000px_var(--color-slate-100)] autofill:[-webkit-text-fill-color:var(--color-slate-900)] disabled:cursor-not-allowed",
      )}
      {...props}
      ref={ref}
    />
  );
}

export default Input;
