import { Link } from "react-router";
import Logo from "../assets/logo.svg?react";
import useAuth from "../features/Auth/useAuth";
import ProfileDropdown from "../features/profile/ProfileDropdown";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="grid grid-cols-[1fr_auto] items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex gap-4">
        <ThemeSelector />
        {isAuthenticated && <ProfileDropdown />}
      </div>
    </nav>
  );
}

export default Navbar;
