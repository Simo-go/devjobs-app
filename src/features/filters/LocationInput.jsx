import clsx from "clsx";
import IconLocation from "../../assets/icons/icon-location.svg?react";
import Form from "../../ui/Form";

function LocationInput({ className }) {
  return (
    <Form.InputContainer className={clsx("md:border-r", className)}>
      <Form.Label
        htmlFor="location"
        className="text-indigo-500 transition-colors duration-300 [&:has(+input:focus)]:text-indigo-300"
      >
        <IconLocation />
      </Form.Label>
      <Form.Input name="location" placeholder="Filter by location" />
    </Form.InputContainer>
  );
}

export default LocationInput;
