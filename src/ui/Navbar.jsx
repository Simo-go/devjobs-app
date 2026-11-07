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
    <nav className="grid grid-cols-[auto_auto] items-center justify-between gap-6 xs:gap-4">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-2 xs:gap-4">
        {pathname !== "/home" && isAuthenticated && (
          <Button variant="navLink" link to="/home">
            Find Jobs
          </Button>
        )}
        {!isAuthenticated && (
          <>
            <Button variant="navLink" link to="/login">
              Login
            </Button>
            <Button variant="navLink" link to="/register">
              Create Account
            </Button>
          </>
        )}
        <ThemeSelector />
        {isAuthenticated && <ProfileDropdown />}
      </div>
    </nav>
  );
}

export default Navbar;
