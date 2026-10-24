function Header({ children }) {
  return (
    <header className="bg-[url('/assets/mobile/bg-pattern-header.svg')] bg-cover bg-center bg-no-repeat pt-8 pb-18 md:rounded-bl-6xl md:pt-11 md:pb-21">
      {children}
    </header>
  );
}

export default Header;
