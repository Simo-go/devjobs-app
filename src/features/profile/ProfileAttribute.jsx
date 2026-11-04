import clsx from "clsx";
import { HiCheck, HiMiniPencil, HiMiniXMark } from "react-icons/hi2";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useProfileAttribute from "./useProfileAttribute";

function ProfileAttribute({ title, inputName, defaultInputValue }) {
  const {
    isEditing,
    inputRef,
    handleSubmit,
    handleDiscardEdit,
    handleEditField,
    rhfFields,
    rhfRef,
  } = useProfileAttribute(inputName, defaultInputValue);

  return (
    <div>
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
            disabled={!isEditing}
          />
        </div>
        <div className="flex gap-1">
          <Button
            onClick={handleSubmit}
            className={clsx(
              "size-6 bg-transparent p-1 transition-opacity duration-100 hover:bg-slate-100",
              isEditing && "opacity-100",
              !isEditing && "opacity-0",
            )}
          >
            <HiCheck className="size-4 stroke-1 text-indigo-500 hover:text-indigo-500/60" />
          </Button>
          <Button
            onClick={handleDiscardEdit}
            className={clsx(
              "size-6 bg-transparent p-1 transition-opacity duration-100 hover:bg-slate-100",
              isEditing && "opacity-100",
              !isEditing && "opacity-0",
            )}
          >
            <HiMiniXMark className="size-4 stroke-1 text-red-500 hover:text-red-500/60" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileAttribute;
