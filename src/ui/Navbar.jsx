import ThemeSelector from "./ThemeSelector";
import Logo from "../assets/logo.svg?react";

function Navbar() {
  return (
    <nav className="grid grid-cols-[1fr_auto] items-center">
      <Logo />
      <ThemeSelector />
    </nav>
  );
}

export default Navbar;
