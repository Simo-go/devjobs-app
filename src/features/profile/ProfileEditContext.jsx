import { createContext, use, useState } from "react";

const ProfileEditContext = createContext();

function ProfileEditProvider({ children }) {
  const [editedFieldName, setEditedFieldName] = useState("");

  return (
    <ProfileEditContext value={{ editedFieldName, setEditedFieldName }}>
      {children}
    </ProfileEditContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProfileEdit() {
  const context = use(ProfileEditContext);

  if (!context)
    throw new Error(
      "Cannot use profile edit context outside of ProfileEditProvider",
    );

  return context;
}

export default ProfileEditProvider;
