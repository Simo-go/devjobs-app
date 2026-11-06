import clsx from "clsx";
import Button from "../../ui/Button";
import { HiMiniPencil } from "react-icons/hi2";
import { useProfileEdit } from "./ProfileEditContext";

function ProfileAttributeHeader({
  inputName,
  title,
  handleEditField,
  isEditing,
  isUpdatingProfile,
}) {
  const { editedFieldName } = useProfileEdit();

  return (
    <header className="grid grid-cols-[1fr_auto]">
      <h2 className="text-preset-3 font-medium">{title}</h2>
      <Button
        onClick={handleEditField}
        className={clsx(
          "size-6 bg-transparent p-1 transition-[opacity,color] duration-100 hover:bg-slate-100 disabled:bg-transparent",
          !isEditing && "visible opacity-100",
          isEditing && "invisible opacity-0",
        )}
        disabled={editedFieldName !== "" && editedFieldName !== inputName}
      >
        <HiMiniPencil className="size-3 stroke-0 text-indigo-500 transition-colors duration-300" />
      </Button>
    </header>
  );
}

export default ProfileAttributeHeader;
