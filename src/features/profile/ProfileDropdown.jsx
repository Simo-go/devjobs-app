import clsx from "clsx";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Button from "../../ui/Button";
import Menu from "../../ui/Menu";
import useLogout from "../Auth/useLogout";

function ProfileDropdown() {
  const { logOut, isLoggingOut } = useLogout();

  return (
    <div>
      <Menu>
        <Menu.Trigger
          render={(onClick, open) => (
            <Button className="rounded-full!" onClick={onClick}>
              <img
                className={clsx(
                  "size-12 shrink-0 scale-100 scrollbar-thumb-indigo-300 rounded-full transition-[box-shadow,scale] duration-300",
                  open && "scale-105 shadow-md",
                )}
                src="/assets/pictures/girl-avatar.jpg"
                alt="Profile picture of NAME"
              />
            </Button>
          )}
        />
        <Menu.List>
          <Menu.Item>
            <Link to="/profile">My Profile</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/bookmarks">Bookmarks</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/applications">Applications</Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              onClick={() => {
                const logOutToastId = toast.loading("Logging out...");

                logOut(undefined, {
                  onError: () =>
                    toast.error("Could not log out. Please try again.", {
                      id: logOutToastId,
                    }),
                  onSuccess: () => {
                    toast.success("You have been successfully logged out.", {
                      id: logOutToastId,
                    });
                  },
                });
              }}
            >
              Log Out
            </Link>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}

export default ProfileDropdown;
