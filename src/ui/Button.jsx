import clsx from "clsx";

function Button({ children, className, size = "normal", ...props }) {
  return (
    <button
      {...props}

      className={clsx(
        "flex cursor-pointer items-center justify-center rounded-md bg-indigo-500 text-neutral-0 capitalize transition-colors duration-300 hover:bg-indigo-300",
        className,
        {
          "px-8 py-3": size === "large",
          "px-4 py-3": size === "normal",
          "p-4": size === "small",
        },
      )}
    >
      {children}
    </button>
  );
}

export default Button;
