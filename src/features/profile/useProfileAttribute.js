import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function useProfileAttribute(defaultInputValue) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const { register, reset } = useForm({
    defaultValues: {
      value: defaultInputValue,
    },
  });

  const { ref: rhfRef, ...rhfFields } = register("value");

  function handleConfirmEdit() {
    setIsEditing(false);
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
    handleConfirmEdit,
    handleDiscardEdit,
    handleEditField,
    rhfRef,
    rhfFields,
  };
}

export default useProfileAttribute;
