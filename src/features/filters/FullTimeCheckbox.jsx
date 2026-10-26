import clsx from "clsx";
import Form from "../../ui/Form";

function FullTimeCheckbox({ className }) {
  return (
    <Form.Container className={clsx("items-center gap-4 md:p-0!", className)}>
      <Form.Checkbox name="is-full-time" className="shrink-0" />
      <Form.Label
        className="cursor-pointer text-preset-4-bold"
        htmlFor="is-full-time"
      >
        Full-Time Only
      </Form.Label>
    </Form.Container>
  );
}

export default FullTimeCheckbox;
