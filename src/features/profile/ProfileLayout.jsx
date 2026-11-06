import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/LoadingSpinner";
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
  const userData = {
    firstName: {
      field: "first_name",
      title: "First Name",
      value: firstName,
    },
    lastName: {
      field: "last_name",
      title: "Last Name",
      value: lastName,
    },
    email: {
      field: "email",
      title: "Email",
      value: email,
    },
  };

  return (
    <Card
      className="mx-auto flex max-w-150 flex-col p-10 text-slate-900"
      tabIndex={-1}
    >
      {isLoadingUser ? (
        <LoadingSpinner />
      ) : (
        <>
          <ProfileHeader firstName={firstName} lastName={lastName} />
          <ProfileDetails userData={userData} />
        </>
      )}
    </Card>
  );
}

export default ProfileLayout;
