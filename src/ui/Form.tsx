/* eslint-disable @eslint-react/no-use-context */
/* eslint-disable @eslint-react/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  createContext,
  CustomComponentPropsWithRef,
  FormHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SubmitEventHandler,
  use,
  useContext,
  useState,
} from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { useSearchParams } from "react-router";
import { mapSearchParamsToObj } from "../utils/helpers";
import Input from "./Input";

type FormContextValue = {
  formName: string | undefined;
  formState: FormState;
  updateField: UpdateFieldFn;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

type FormState = Record<string, string | boolean | File | undefined>;
type FormStateValue = FormState[string];

type UpdateFieldFn = (name: string, value: FormStateValue) => void;

const FormContext = createContext<FormContextValue | null>(null);

// Note: the idea here is to keep the form state shared and to all elements to be very customizable, (also in terms of css w/ tailwind!)
type FormProps = {
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
} & ComponentPropsWithRef<"form">;

function Form({ className, children, id, handleSubmit, ref }: FormProps) {
  const [searchParams, _] = useSearchParams();

  const formName = id;
  const [formState, setFormState] = useState<FormState>(() => {
    return mapSearchParamsToObj(searchParams);
  });

  const updateField: UpdateFieldFn = function updateField(name, value) {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(e);
  }

  return (
    <FormContext value={{ formName, formState, updateField, onSubmit }}>
      <form id={formName} className={className} onSubmit={onSubmit} ref={ref}>
        {children}
      </form>
    </FormContext>
  );
}

type FileInputProps = { id: string } & ComponentPropsWithRef<"input">;
Form.FileInput = function FileInput({
  id,
  onChange,
  ...props
}: FileInputProps) {
  const { formState, updateField, formName } = useFormContext();

  async function handleChosenFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0];
    if (file) {
      updateField(id, file);
      onChange?.(e);
    }
  }

  return (
    <input
      id={id}
      type="file"
      {...props}
      onChange={handleChosenFile}
      form={formName}
    />
  );
};

type InputProps = { id: string } & ComponentPropsWithRef<typeof Input>;
Form.Input = function ({ id, className, onChange, ...props }: InputProps) {
  const { formState, updateField, formName } = useFormContext();

  if (formState[id] instanceof File || typeof formState[id] === "boolean")
    return;

  return (
    <Input
      id={id}
      {...props}
      className={className}
      value={formState[id] ?? ""}
      onChange={(e) => {
        updateField(id, e.target.value);
        onChange?.(e);
      }}
      form={formName}
    />
  );
};

type TextareaProps = {
  id: string;
} & ComponentPropsWithRef<"textarea">;
Form.TextArea = function TextArea({
  id,
  children,
  className,
  onChange,
  ...props
}: TextareaProps) {
  const { formState, updateField, formName } = useFormContext();

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) {
    onChange?.(e);
    updateField(id, e.target.value);
  }

  if (formState[id] instanceof File || typeof formState[id] === "boolean")
    return;

  return (
    <textarea
      {...props}
      className={className}
      id={id}
      value={formState[id] ?? ""}
      onChange={handleChange}
      form={formName}
    >
      {children}
    </textarea>
  );
};

type CheckboxProps = { id: string } & ComponentPropsWithRef<typeof Checkbox>;
Form.Checkbox = function ({ id, onChange, ...props }: CheckboxProps) {
  const { formName, formState, updateField } = useFormContext();
  const isChecked = Boolean(formState[id]);

  return (
    <Checkbox
      id={id}
      {...props}
      type="checkbox"
      checked={isChecked}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        updateField(id, e.target.checked); // own controlled state update
        onChange?.(e); // react hook form update
      }}
      form={formName}
    />
  );
};

type SubmitProps = Extract<
  ComponentPropsWithRef<typeof Button>,
  { link?: false }
>;
Form.Submit = function ({ children, ...props }: SubmitProps) {
  const { formName } = useFormContext();

  return (
    <Button {...props} type="submit" form={formName}>
      {children}
    </Button>
  );
};

type ClearProps = { name: string; onClick?: (name: string) => void } & Extract<
  CustomComponentPropsWithRef<typeof Button>,
  { link?: false }
>;
Form.ClearField = function ({ children, name, onClick, ...props }: ClearProps) {
  const { updateField, formState } = useFormContext();

  function handleClearField(e: React.MouseEvent<HTMLButtonElement>) {
    updateField(name, undefined);
    onClick?.(name);
    e.stopPropagation();
  }

  return (
    <Button onClick={handleClearField} type="button" {...props}>
      {children}
    </Button>
  );
};

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;
Form.Label = function ({
  htmlFor,
  className,
  children,
  ...props
}: FormLabelProps) {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={clsx(
        className,
        "in-[.group:has(:disabled)]:cursor-not-allowed",
      )}
    >
      {children}
    </label>
  );
};

type FormErrorProps = { children: ReactNode; className?: string };
Form.Error = function ({ children, className }: FormErrorProps) {
  return (
    <span className={clsx(className, "text-preset-5 font-normal text-red-500")}>
      {children}
    </span>
  );
};

Form.InputContainer = function ({
  className,
  children,
}: Parameters<typeof Form.Container>[0]) {
  return (
    <Form.Container
      className={clsx(
        "group border-r-slate-900/20 transition-shadow has-focus-visible:ring-2 has-focus-visible:ring-indigo-300 has-focus-visible:ring-inset has-disabled:cursor-not-allowed has-disabled:opacity-50",
        className,
      )}
    >
      {children}
    </Form.Container>
  );
};

type ContainerProps = { className?: string; children: ReactNode };
Form.Container = function ({ className, children }: ContainerProps) {
  return <div className={clsx(className, "p-4 md:px-6")}>{children}</div>;
};

Form.Header = function ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <header className={clsx(className)}>{children}</header>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useFormContext() {
  const context = use(FormContext);

  if (!context) throw new Error("Form context used outside of FormProvider");

  return context;
}

export default Form;
