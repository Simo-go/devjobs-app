import { ComponentPropsWithRef, TextareaHTMLAttributes } from "react";
import Form from "../../../ui/Form";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";
import { FormValues } from "../types";

function MotivationInput({
  onChange,
  ...register
}: UseFormRegisterReturn<"motivation">) {
  return (
    <Form.Container>
      <Form.Label className="mb-2 block text-preset-3">Motivation</Form.Label>
      <div className="rounded-md border-2 border-slate-100 transition-[box-shadow,border] focus-within:border-transparent focus-within:ring-2 focus-within:ring-indigo-300">
        <Form.TextArea
          onChange={onChange}
          {...register}
          id="motivation"
          rows={5}
          className="block w-full resize-none overflow-auto border-0 px-2 py-0 text-preset-4-regular leading-normal outline-none"
        />
      </div>
    </Form.Container>
  );
}

export default MotivationInput;
