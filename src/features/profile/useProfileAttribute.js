import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useUpdateProfile from "./useUpdateProfile";
import { useProfileEdit } from "./ProfileEditContext";
import { validations } from "../../utils/constants";
import { convertSnakecaseToCamelcase } from "../../utils/helpers";
import toast from "react-hot-toast";

function useProfileAttribute(inputName, inputValue) {
  const inputRef = useRef(); // used to remove input focus

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors: validationErrors },
  } = useForm({
    defaultValues: {
      [inputName]: inputValue,
    },
    values: { [inputName]: inputValue },
    resetOptions: { keepDirtyValues: true },
  });
  const { ref: rhfRef, ...rhfFields } = register(
    inputName,
    validations[convertSnakecaseToCamelcase(inputName)],
  );
  const { updateProfile, updateError, isUpdatingProfile } = useUpdateProfile();

  const { setEditedFieldName, editedFieldName } = useProfileEdit();
  const isEditing = editedFieldName === inputName;

  function onConfirmEdit(data) {
    if (data[inputName] === inputValue) return setEditedFieldName("");

    updateProfile(
      { field: inputName, value: data[inputName] },
      {
        onSuccess: () => {
          setEditedFieldName("");
          // add toast
          toast.success("Profile successfully updated!");
        },
        onError: () => {
          // setIsEditing(true);
          setEditedFieldName(inputName);
          // add error toast
          toast.error("Profile could not be updated. Please try again.");
        },
      },
    );
  }

  function handleEditField() {
    // setIsEditing((bool) => !bool);
    setEditedFieldName((prevInputName) =>
      prevInputName === inputName ? "" : inputName,
    );
  }

  function handleDiscardEdit() {
    // setIsEditing(false);
    setEditedFieldName("");
    reset(
      { [inputName]: inputValue },
      {
        keepDirtyValues: false,
      },
    );
  }

  useEffect(
    function () {
      if (!isEditing) inputRef.current.blur();
      else inputRef.current.focus();
    },
    [isEditing],
  );

  return {
    isEditing,
    inputRef,
    handleDiscardEdit,
    handleEditField,
    rhfRef,
    rhfFields,
    validationErrors,
    handleSubmit: handleSubmit(onConfirmEdit),
    updateError,
    isUpdatingProfile,
  };
}

export default useProfileAttribute;
