import clsx from "clsx";

function Container({ children, className }) {
  return (
    <div className={clsx("mx-auto w-full max-w-275 px-6", className)}>
      {children}
    </div>
  );
}

export default Container;
