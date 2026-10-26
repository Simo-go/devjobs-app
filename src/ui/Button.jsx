import clsx from "clsx";

function Button({ children, className, variant = "primary", size, ...props }) {
  return (
    <button
      {...props}

      className={clsx(
        "flex cursor-pointer items-center justify-center transition-colors duration-300",
        className,
        {
          "px-8 py-3": size === "large",
          "px-4 py-3": size === "normal",
          "p-4": size === "small",
        },
        size !== "icon" && {
          "rounded-md capitalize": true,
          "bg-indigo-500 text-neutral-0 hover:bg-indigo-300":
            variant === "primary",
          "bg-indigo-500/20 text-preset-4-bold text-indigo-500 hover:bg-indigo-500/10":
            variant === "secondary",
        },
      )}
    >
      {children}
    </button>
  );
}

export default Button;
