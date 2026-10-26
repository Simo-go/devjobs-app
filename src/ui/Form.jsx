/* eslint-disable @eslint-react/no-use-context */
/* eslint-disable @eslint-react/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import { createContext, useContext, useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const FormContext = createContext();

// Note: the idea here is to keep the form state shared and to all elements to be very customizable, (also in terms of css w/ tailwind!)
function Form({ className, children, id, handleSubmit }) {
  const formName = id;
  const [formState, setFormState] = useState({});

  function updateField(name, value) {
    setFormState((state) => ({ ...state, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(formState);
  }

  return (
    <FormContext value={{ formName, formState, updateField, onSubmit }}>
      <form id={formName} className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </FormContext>
  );
}

Form.Input = function ({ name, className, ...props }) {
  const { formState, updateField } = useContext(FormContext);

  return (
    <input
      id={name}
      {...props}
      className={clsx(
        className,
        "w-full truncate text-preset-4-regular text-slate-950 outline-0 placeholder-shown:text-ellipsis autofill:shadow-[inset_0_0_0_1000px_white]",
      )}
      value={formState[name] ?? ""}
      onChange={(e) => updateField(name, e.target.value)}
    />
  );
};

Form.Checkbox = function ({ name, ...props }) {
  const { formState, updateField } = useContext(FormContext);
  const isChecked = Boolean(formState[name]);

  return (
    <Checkbox
      id={name}
      {...props}
      type="checkbox"
      checked={isChecked}
      onChange={(e) => updateField(name, e.target.checked)}
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

export default Form;
