import clsx from "clsx";
import Form from "../../ui/Form";

function AuthInput({ id, Icon, className, ...props }) {
  return (
    <Form.InputContainer
      className={clsx(
        className,
        "flex items-center gap-2 rounded-md bg-slate-100 py-3!",
      )}
    >
      <Form.Label htmlFor={id}>
        <Icon className="text-slate-900" />
      </Form.Label>
      <Form.Input id={id} {...props} />
    </Form.InputContainer>
  );
}

export default AuthInput;
