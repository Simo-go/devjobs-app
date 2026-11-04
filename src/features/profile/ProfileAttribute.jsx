import clsx from "clsx";
import { HiCheck, HiMiniPencil, HiMiniXMark } from "react-icons/hi2";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useProfileAttribute from "./useProfileAttribute";
import ProfileAttributeHeader from "./ProfileAttributeHeader";
import AttributeEditActions from "./AttributeEditActions";

function ProfileAttribute({ title, inputName, defaultInputValue }) {
  const {
    isEditing,
    inputRef,
    handleSubmit,
    handleDiscardEdit,
    handleEditField,
    rhfFields,
    rhfRef,
    isUpdatingProfile,
  } = useProfileAttribute(inputName, defaultInputValue);

  return (
    <div>
      <ProfileAttributeHeader
        title={title}
        handleEditField={handleEditField}
        isEditing={isEditing}
      />
      <hr className="mb-4 border-t border-t-slate-900/20" />
      <div className="grid grid-cols-[1fr_auto] items-center gap-4">
        <div
          className={clsx(
            isEditing && "bg-slate-100 px-2",
            "group flex w-auto items-center rounded-md py-1 transition-all duration-300 has-focus-visible:ring-2 has-focus-visible:ring-indigo-300 has-focus-visible:ring-inset has-disabled:opacity-50",
          )}
        >
          <Input
            {...rhfFields}
            ref={(el) => {
              inputRef.current = el;
              rhfRef(el);
            }}
            disabled={!isEditing || isUpdatingProfile}
          />
        </div>
        <AttributeEditActions
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          handleDiscardEdit={handleDiscardEdit}
          isUpdatingProfile={isUpdatingProfile}
        />
      </div>
    </div>
  );
}

export default ProfileAttribute;
