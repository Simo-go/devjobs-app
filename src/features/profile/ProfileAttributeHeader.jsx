import clsx from "clsx";
import Button from "../../ui/Button";
import { HiMiniPencil } from "react-icons/hi2";

function ProfileAttributeHeader({ title, handleEditField, isEditing }) {
  return (
    <header className="grid grid-cols-[1fr_auto]">
      <h2 className="text-preset-3 font-medium">{title}</h2>
      <Button
        onClick={handleEditField}
        className={clsx(
          "size-6 bg-transparent p-1 transition-[opacity,color] duration-100 hover:bg-slate-100",
          !isEditing && "opacity-100",
          isEditing && "opacity-0",
        )}
      >
        <HiMiniPencil className="size-3 stroke-0 text-indigo-500 transition-colors duration-300" />
      </Button>
    </header>
  );
}

export default ProfileAttributeHeader;
