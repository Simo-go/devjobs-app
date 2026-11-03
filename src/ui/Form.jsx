/* eslint-disable @eslint-react/no-use-context */
/* eslint-disable @eslint-react/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import { createContext, use, useContext, useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { useSearchParams } from "react-router";
import { mapSearchParamsToObj } from "../utils/helpers";

const FormContext = createContext();

// Note: the idea here is to keep the form state shared and to all elements to be very customizable, (also in terms of css w/ tailwind!)
function Form({ className, children, id, handleSubmit, ref }) {
  const [searchParams, _] = useSearchParams();

  const formName = id;
  const [formState, setFormState] = useState(() => {
    if (searchParams.size) return mapSearchParamsToObj(searchParams);
    return {};
  });

  function updateField(name, value) {
    setFormState((state) => ({ ...state, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(formState);
  }

  return (
    <FormContext value={{ formName, formState, updateField, onSubmit }}>
      <form id={formName} className={className} onSubmit={onSubmit} ref={ref}>
        {children}
      </form>
    </FormContext>
  );
}

Form.Input = function ({ id, className, onChange, ...props }) {
  const { formState, updateField, formName } = useContext(FormContext);

  return (
    <input
      id={id}
      {...props}
      className={clsx(
        className,
        "w-full truncate text-preset-4-regular text-slate-900 outline-0 placeholder:text-slate-900/50 placeholder-shown:text-ellipsis autofill:shadow-[inset_0_0_0_1000px_white]",
      )}
      value={formState[id] ?? ""}
      onChange={(e) => {
        updateField(id, e.target.value);
        onChange?.(e);
      }}
      form={formName}
    />
  );
};

Form.Checkbox = function ({ id, onChange, ...props }) {
  const { formState, updateField } = useContext(FormContext);
  const isChecked = Boolean(formState[id]);
  const { formName } = useContext(FormContext);

  return (
    <Checkbox
      id={id}
      {...props}
      type="checkbox"
      checked={isChecked}
      onChange={(e) => {
        updateField(id, e.target.checked); // own controlled state update
        onChange?.(e); // react hook form update
      }}
      form={formName}
    />
  );
};

Form.Submit = function ({ children, ...props }) {
  const { formName } = useContext(FormContext);

  return (
    <Button {...props} type="submit" form={formName}>
      {children}
    </Button>
  );
};

// Form.Button = function () {};
Form.Label = function ({ htmlFor, className, children, ...props }) {
  return (
    <label {...props} htmlFor={htmlFor} className={clsx(className)}>
      {children}
    </label>
  );
};

Form.Error = function ({ children, className }) {
  return (
    <span className={clsx(className, "text-preset-5 font-normal text-red-500")}>
      {children}
    </span>
  );
};

Form.InputContainer = function ({ className, children }) {
  return (
    <Form.Container
      className={clsx(
        "border-r-slate-900/20 transition-shadow has-focus-visible:ring-2 has-focus-visible:ring-indigo-300 has-focus-visible:ring-inset",
        className,
      )}
    >
      {children}
    </Form.Container>
  );
};

Form.Container = function ({ className, children }) {
  return <div className={clsx(className, "p-4 md:px-6")}>{children}</div>;
};

Form.Header = function ({ className, children }) {
  return <header className={clsx(className)}>{children}</header>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useFormContext() {
  const context = use(FormContext);

  if (!context) throw new Error("Form context used outside of FormProvider");

  return context;
}

export default Form;
