import clsx from "clsx";

function GridBox({ children, className = "" }) {
  // eslint-disable-next-line tailwindcss/no-custom-classname
  return <div className={clsx("grid", className)}>{children}</div>;
}

export default GridBox;
