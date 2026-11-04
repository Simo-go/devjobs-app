import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useUpdateProfile from "./useUpdateProfile";
import { useProfileEdit } from "./ProfileEditContext";

function useProfileAttribute(inputName, defaultInputValue) {
  const inputRef = useRef();

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      [inputName]: defaultInputValue,
    },
    values: { [inputName]: defaultInputValue },
    resetOptions: { keepDirtyValues: true },
  });
  const { updateProfile, updateError, isUpdatingProfile } = useUpdateProfile();
  const { setEditedFieldName, editedFieldName } = useProfileEdit();

  const { ref: rhfRef, ...rhfFields } = register(inputName);
  const isEditing = editedFieldName === inputName;

  function onConfirmEdit(data) {
    if (data[inputName] === defaultInputValue) return setEditedFieldName("");

    // setIsEditing(false);

    updateProfile(
      { field: inputName, value: data[inputName] },
      {
        onSuccess: () => {
          setEditedFieldName("");
          // add toast
        },
        onError: () => {
          // setIsEditing(true);
          setEditedFieldName(inputName);
          // add error toast
        },
      },
    );
  }

  function handleEditField() {
    // setIsEditing((bool) => !bool);
    setEditedFieldName((prevInputName) =>
      prevInputName === inputName ? "" : inputName,
    );
    isEditing ? inputRef.current.blur() : inputRef.current.focus();
  }

  function handleDiscardEdit() {
    // setIsEditing(false);
    setEditedFieldName("");
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
