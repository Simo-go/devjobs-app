import { Link, useLocation } from "react-router";
import Logo from "../assets/logo.svg?react";
import useAuth from "../features/Auth/useAuth";
import ProfileDropdown from "../features/profile/ProfileDropdown";
import ThemeSelector from "./ThemeSelector";
import Button from "./Button";

function Navbar() {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav className="grid grid-cols-[auto_auto] items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        {pathname !== "/home" && (
          <Button
            className="rounded-none bg-transparent pb-0.5 text-preset-4-bold text-neutral-0 hover:bg-transparent hover:shadow-[inset_0px_-2px_currentColor]"
            link
            to="/home"
          >
            Find Jobs
          </Button>
        )}
        <ThemeSelector />
        {isAuthenticated && <ProfileDropdown />}
      </div>
    </nav>
  );
}

export default Navbar;
