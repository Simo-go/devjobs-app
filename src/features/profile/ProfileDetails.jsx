import ProfileAttribute from "./ProfileAttribute";

function ProfileDetails({ email, firstName, lastName }) {
  return (
    <section className="space-y-8">
      <ProfileAttribute title="Email" type="email" defaultInputValue={email} />
      <ProfileAttribute
        title="First Name"
        type="text"
        defaultInputValue={firstName}
      />
      <ProfileAttribute
        title="Last Name"
        type="text"
        defaultInputValue={lastName}
      />
    </section>
  );
}

export default ProfileDetails;
