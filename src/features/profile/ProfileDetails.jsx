import ProfileAttribute from "./ProfileAttribute";

function ProfileDetails({ email, firstName, lastName }) {
  return (
    <section className="space-y-8">
      <ProfileAttribute
        title="Email"
        type="email"
        defaultInputValue={email}
        inputName="email"
      />
      <ProfileAttribute
        title="First Name"
        type="text"
        defaultInputValue={firstName}
        inputName="first_name"
      />
      <ProfileAttribute
        title="Last Name"
        type="text"
        defaultInputValue={lastName}
        inputName="last_name"
      />
    </section>
  );
}

export default ProfileDetails;
