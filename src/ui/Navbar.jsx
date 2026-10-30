import ThemeSelector from "./ThemeSelector";
import Logo from "../assets/logo.svg?react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="grid grid-cols-[1fr_auto] items-center">
      <Link to="/">
        <Logo />
      </Link>
      <ThemeSelector />
    </nav>
  );
}

export default Navbar;
