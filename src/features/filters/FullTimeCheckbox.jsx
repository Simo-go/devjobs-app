import clsx from "clsx";
import Form from "../../ui/Form";
import { useId } from "react";

function FullTimeCheckbox({ className }) {
  const id = useId();

  return (
    <Form.Container className={clsx("items-center gap-4 md:p-0!", className)}>
      <Form.Checkbox id={id} name="is-full-time" className="shrink-0" />
      <Form.Label className="cursor-pointer text-preset-4-bold" htmlFor={id}>
        Full-Time Only
      </Form.Label>
    </Form.Container>
  );
}

export default FullTimeCheckbox;
