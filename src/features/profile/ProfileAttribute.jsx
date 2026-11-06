import clsx from "clsx";
import Input from "../../ui/Input";
import AttributeEditActions from "./AttributeEditActions";
import ProfileAttributeHeader from "./ProfileAttributeHeader";
import useProfileAttribute from "./useProfileAttribute";
import { useEffect } from "react";

function ProfileAttribute({ title, field, inputValue }) {
  const {
    isEditing,
    inputRef,
    handleSubmit,
    handleDiscardEdit,
    handleEditField,
    rhfFields,
    rhfRef,
    validationErrors,
    isUpdatingProfile,
  } = useProfileAttribute(field, inputValue);

  useEffect(
    function () {
      if (Object.keys(validationErrors).length) console.log(validationErrors);
    },
    [validationErrors],
  );

  return (
    <div>
      <ProfileAttributeHeader
        inputName={field}
        title={title}
        handleEditField={handleEditField}
        isEditing={isEditing}
        isUpdatingProfile={isUpdatingProfile}
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
