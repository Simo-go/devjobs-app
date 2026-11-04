import Card from "../../ui/Card";
import useUser from "../Auth/useUser";
import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";

function ProfileLayout() {
  const { user, isLoadingUser } = useUser();
  const {
    first_name: firstName,
    last_name: lastName,
    email,
  } = user?.user_metadata ?? {};

  return (
    <Card
      className="mx-auto flex max-w-150 flex-col p-10 text-slate-900"
      tabIndex={-1}
    >
      {isLoadingUser ? (
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
