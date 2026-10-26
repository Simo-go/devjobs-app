import clsx from "clsx";

function Main({ children, className }) {
  return <main className={clsx(className)}>{children}</main>;
}

export default Main;
