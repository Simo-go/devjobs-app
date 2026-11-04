import Card from "../../ui/Card";
import Input from "../../ui/Input";
import useUser from "../Auth/useUser";
import ProfileAttribute from "./ProfileAttribute";
import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";

function ProfileLayout() {
  const { user, isAuthenticating } = useUser();
  const {
    user_metadata: { first_name: firstName, last_name: lastName, email },
  } = user || {};

  return (
    <Card
      className="mx-auto flex max-w-150 flex-col p-10 text-slate-900"
      tabIndex={-1}
    >
      {isAuthenticating ? (
        "loading..."
      ) : (
        <>
          <ProfileHeader firstName={firstName} lastName={lastName} />
          <ProfileDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
        </>
      )}
    </Card>
  );
}

export default ProfileLayout;
