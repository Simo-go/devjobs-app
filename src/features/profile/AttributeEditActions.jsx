import { HiCheck, HiMiniXMark } from "react-icons/hi2";
import Button from "../../ui/Button";
import clsx from "clsx";
import AttributeEditButton from "./AttributeEditButton";
import LoadingSpinnerSmall from "../../ui/LoadingSpinnerSmall";

function AttributeEditActions({
  handleSubmit,
  isEditing,
  handleDiscardEdit,
  isUpdatingProfile,
}) {
  if (isUpdatingProfile) {
    return (
      <div
        className={clsx(
          isEditing && "opacity-100",
          !isEditing && "opacity-0",
          "size-6 bg-transparent p-1",
        )}
      >
        <LoadingSpinnerSmall color="var(--color-indigo-500)" size={16} />
      </div>
    );
  }

  return (
    <div className="flex gap-1">
      <AttributeEditButton
        onClick={handleSubmit}
        className={clsx(isEditing && "opacity-100", !isEditing && "opacity-0")}
      >
        <HiCheck className="size-4 stroke-1 text-indigo-500 hover:text-indigo-500/60" />
      </AttributeEditButton>
      <AttributeEditButton
        onClick={handleDiscardEdit}
        isEditing={isEditing}
        className={clsx(isEditing && "opacity-100", !isEditing && "opacity-0")}
      >
        <HiMiniXMark className="size-4 stroke-1 text-red-500 hover:text-red-500/60" />
      </AttributeEditButton>
    </div>
  );
}

export default AttributeEditActions;
