import clsx from "clsx";

function Header({ children, className }) {
  return (
    <header
      className={clsx(
        "bg-[url('/assets/mobile/bg-pattern-header.svg')] bg-cover bg-center bg-no-repeat md:rounded-bl-6xl",
        className,
      )}
    >
      {children}
    </header>
  );
}

export default Header;
