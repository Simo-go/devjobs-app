import useUser from "../features/Auth/useUser";
import ProfileLayout from "../features/profile/ProfileLayout";
import Card from "../ui/Card";
import Container from "../ui/Container";

function Profile() {
  return (
    <Container className="self-center">
      <ProfileLayout />
    </Container>
  );
}

export default Profile;
