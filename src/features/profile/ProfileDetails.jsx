import { useState } from "react";
import ProfileAttribute from "./ProfileAttribute";

function ProfileDetails({ userData }) {
  const [editedField, setEditedField] = useState("");

  return (
    <section className="space-y-8">
      {Object.values(userData).map(({ field, value, title }) => (
        <ProfileAttribute
          key={field}
          title={title}
          defaultInputValue={value}
          inputName={field}
          type={field === "email" ? "email" : "text"}
        />
      ))}
      {/* <ProfileAttribute
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
      /> */}
    </section>
  );
}

export default ProfileDetails;
