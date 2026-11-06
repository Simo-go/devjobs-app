import ProfileAttribute from "./ProfileAttribute";
import ProfileEditProvider from "./ProfileEditContext";

function ProfileDetails({ userData }) {
  return (
    <ProfileEditProvider>
      <section className="space-y-8">
        {Object.values(userData).map(({ field, value, title }) => (
          <ProfileAttribute
            key={field}
            title={title}
            inputValue={value}
            field={field}
            type={field === "email" ? "email" : "text"}
          />
        ))}
      </section>
    </ProfileEditProvider>
  );
}

export default ProfileDetails;
