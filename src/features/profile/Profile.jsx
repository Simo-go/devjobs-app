import { Link } from "react-router";
import Button from "../../ui/Button";
import Menu from "../../ui/Menu";

function Profile() {
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
          <Menu.Item>Log Out</Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}

export default Profile;
