import { Link } from "react-router";
import Button from "../../ui/Button";
import Menu from "../../ui/Menu";
import useLogout from "../Auth/useLogout";
import toast from "react-hot-toast";

function Profile() {
  const { logOut, isLoggingOut } = useLogout();

  return (
    <div>
      <Menu>
        <Menu.Trigger
          render={(onClick) => (
            <Button className="rounded-full!" onClick={onClick}>
              <img
                className="size-12 rounded-full"
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
            <Link
              // eslint-disable-next-line no-undef
              onClick={() => {
                const logOutToastId = toast.loading("Logging out...");

                logOut(undefined, {
                  onError: () =>
                    toast.error("Could not log out. Please try again.", {
                      id: logOutToastId,
                    }),
                  onSuccess: () =>
                    toast.success("You have been successfully logged out.", {
                      id: logOutToastId,
                    }),
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

export default Profile;
