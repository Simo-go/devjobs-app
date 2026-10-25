/* eslint-disable @eslint-react/no-use-context */
/* eslint-disable @eslint-react/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import { createContext, useContext, useState } from "react";
import Button from "./Button";

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
      {...props}
      className={clsx(className)}
      value={formState[name] ?? ""}
      onChange={(e) => updateField(name, e.target.value)}
    />
  );
};

Form.Checkbox = function ({ name, className, ...props }) {
  const { formState, updateField } = useContext(FormContext);
  const isChecked = Boolean(formState[name]);

  return (
    <input
      {...props}
      className={clsx(className)}
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
Form.Label = function ({ className, children, ...props }) {
  return (
    <label {...props} className={clsx(className)}>
      {children}
    </label>
  );
};

Form.Container = function ({ className, children }) {
  return <div className={clsx(className)}>{children}</div>;
};

export default Form;
