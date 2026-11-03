import clsx from "clsx";

function AuthDetails({ children, className }) {
  return <div className={clsx(className, "mb-4 space-y-2")}>{children}</div>;
}

export default AuthDetails;
