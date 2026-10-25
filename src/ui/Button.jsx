import clsx from "clsx";

function Button({ children, className, size, ...props }) {
  return (
    <button
      {...props}

      className={clsx(
        "flex cursor-pointer items-center justify-center transition-colors duration-300",
        size !== "icon" &&
          "rounded-md bg-indigo-500 text-neutral-0 capitalize hover:bg-indigo-300",
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
