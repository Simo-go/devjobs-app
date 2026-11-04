import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useUpdateProfile from "./useUpdateProfile";

function useProfileAttribute(inputName, defaultInputValue) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      [inputName]: defaultInputValue,
    },
  });
  const { updateProfile, updateError, isUpdatingProfile } = useUpdateProfile();

  const { ref: rhfRef, ...rhfFields } = register(inputName);

  function onConfirmEdit(data) {
    if (data[inputName] === defaultInputValue) return;
    console.log(data[inputName]);

    updateProfile({ field: inputName, value: data[inputName] });
    // setIsEditing(false);
  }

  function handleEditField() {
    setIsEditing((bool) => !bool);
    isEditing ? inputRef.current.blur() : inputRef.current.focus();
  }

  function handleDiscardEdit() {
    setIsEditing(false);
    reset();
  }

  return {
    isEditing,
    inputRef,
    handleDiscardEdit,
    handleEditField,
    rhfRef,
    rhfFields,
    handleSubmit: handleSubmit(onConfirmEdit),
  };
}

export default useProfileAttribute;
