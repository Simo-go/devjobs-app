function Header({ children }) {
  return (
    <header className="col-start-1 col-end-2 row-start-1 row-end-3 grid w-full grid-rows-subgrid bg-[url('/assets/mobile/bg-pattern-header.svg')] bg-cover bg-center bg-no-repeat md:rounded-bl-6xl">
      {children}
    </header>
  );
}

export default Header;
