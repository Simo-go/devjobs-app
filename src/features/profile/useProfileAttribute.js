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
    values: { [inputName]: defaultInputValue },
    resetOptions: { keepDirtyValues: true },
  });
  const { updateProfile, updateError, isUpdatingProfile } = useUpdateProfile();

  const { ref: rhfRef, ...rhfFields } = register(inputName);

  function onConfirmEdit(data) {
    if (data[inputName] === defaultInputValue) return setIsEditing(false);

    setIsEditing(false);

    updateProfile(
      { field: inputName, value: data[inputName] },
      {
        onSuccess: () => {
          // add toast
        },
        onError: () => {
          setIsEditing(true);
          // add error toast
        },
      },
    );
  }

  function handleEditField() {
    setIsEditing((bool) => !bool);
    isEditing ? inputRef.current.blur() : inputRef.current.focus();
  }

  function handleDiscardEdit() {
    setIsEditing(false);
    reset(
      { [inputName]: defaultInputValue },
      {
        keepDirtyValues: false,
      },
    );
  }

  return {
    isEditing,
    inputRef,
    handleDiscardEdit,
    handleEditField,
    rhfRef,
    rhfFields,
    handleSubmit: handleSubmit(onConfirmEdit),
    updateError,
    isUpdatingProfile,
  };
}

export default useProfileAttribute;
