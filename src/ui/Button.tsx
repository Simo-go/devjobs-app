import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import type { LinkProps } from "react-router";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "outline" | "navLink";
type ButtonSize = "large" | "normal" | "small" | "icon";
type ButtonProps =
  | ({
      link?: false;
      variant?: ButtonVariant;
      size?: ButtonSize;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      link: true;
      variant?: ButtonVariant;
      size?: ButtonSize;
    } & LinkProps);

function Button({
  children,
  className,
  variant = "primary",
  size,
  ...props
}: ButtonProps) {
  const styles = [
    "flex cursor-pointer items-center justify-center text-nowrap ring-transparent ring-offset-0 transition-[background-color,box-shadow] duration-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:bg-indigo-300 disabled:cursor-not-allowed",
    {
      "px-8 py-3": size === "large",
      "px-4 py-3": size === "normal",
      "p-4": size === "small",
    },
    size !== "icon" && {
      "rounded-md capitalize": true,
      "bg-indigo-500 text-neutral-0 hover:bg-indigo-300": variant === "primary",
      "bg-indigo-500/20 text-preset-4-bold text-indigo-500 hover:bg-indigo-500/10":
        variant === "secondary",
      "text-slate-900 hover:text-slate-500": variant === "outline",
      "rounded-none bg-transparent pb-0.5 text-preset-4-bold text-neutral-0 hover:bg-transparent hover:shadow-[inset_0px_-2px_currentColor] text-wrap":
        variant === "navLink",
    },
  ];

  if (props.link) {
    const { link, ...rest } = props;
    return (
      <Link {...rest} className={clsx(styles, className)}>
        {children}
      </Link>
    );
  }

  const { link, ...rest } = props;
  return (
    <button {...rest} className={clsx(styles, className)}>
      {children}
    </button>
  );
}

export default Button;
