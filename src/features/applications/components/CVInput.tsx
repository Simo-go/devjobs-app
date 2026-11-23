import { useRef } from "react";
import Form, { useFormContext } from "../../../ui/Form";
import AddCVFile from "./AddCVFile";
import FilePreview from "./FilePreview";
import {
  useWatch,
  type Control,
  type UseFormRegisterReturn,
  type UseFormResetField,
} from "react-hook-form";
import { FormValues } from "../types";

function CVInput({
  onClear,
  control,
  ref: inputRef,
  ...register
}: {
  onClear: () => void;
  control: Control<FormValues, any, FormValues>;
} & UseFormRegisterReturn<"cv">) {
  const fileList = useWatch({
    name: "cv",
    control: control,
  });
  const cv = fileList?.item(0);
  const isPdfType = cv?.type === "application/pdf";

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleClear() {
    if (!fileInputRef.current) return;
    fileInputRef.current.value = "";
    onClear();
  }

  return (
    <Form.InputContainer>
      <h2 className="mb-2 text-preset-3">CV</h2>
      <Form.Label htmlFor="cv">
        {!cv || !isPdfType ? (
          <AddCVFile />
        ) : (
          <FilePreview cv={cv} onClear={handleClear} />
        )}
        <Form.FileInput
          id="cv"
          hidden
          accept=".pdf"
          ref={(ref) => {
            fileInputRef.current = ref;
            inputRef(ref);
          }}
          {...register}
        />
      </Form.Label>
    </Form.InputContainer>
  );
}

export default CVInput;
