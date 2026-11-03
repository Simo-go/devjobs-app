import ThemeSelector from "./ThemeSelector";
import Logo from "../assets/logo.svg?react";
import { Link } from "react-router";
import useUser from "../features/Auth/useUser";
import Profile from "../features/profile/Profile";

function Navbar() {
  const { isAuthenticated } = useUser();

  return (
    <nav className="grid grid-cols-[1fr_auto] items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex gap-4">
        <ThemeSelector />
        {isAuthenticated && <Profile />}
      </div>
    </nav>
  );
}

export default Navbar;
