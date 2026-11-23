import { ComponentPropsWithRef, TextareaHTMLAttributes } from "react";
import Form from "../../../ui/Form";
import {
  Control,
  UseFormRegisterReturn,
  UseFormReturn,
  useWatch,
} from "react-hook-form";
import { FormValues } from "../types";
import { getWordCount } from "../../../utils/helpers";
import { MIN_WORD_COUNT } from "../../../utils/constants";

function MotivationInput({
  onChange,
  control,
  errorMsg,
  ...register
}: {
  control: Control<FormValues>;
  errorMsg: string | undefined;
} & UseFormRegisterReturn<"motivation">) {
  const motivation = useWatch<FormValues, "motivation", FormValues>({
    name: "motivation",
    control: control,
  });
  const wordCount = getWordCount(motivation);
  const showWordCount = wordCount <= MIN_WORD_COUNT;

  return (
    <Form.Container>
      <div className="flex items-center justify-between">
        <Form.Label className="mb-2 block text-preset-3">Motivation</Form.Label>
        <div className="text-right">
          <Form.Error className="block">{errorMsg}</Form.Error>
          {showWordCount && (
            <span className="text-preset-5 font-normal text-slate-300">
              Words remaining: {MIN_WORD_COUNT - wordCount}
            </span>
          )}
        </div>
      </div>
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
