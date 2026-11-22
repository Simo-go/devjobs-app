import { useEffect, useRef, useState } from "react";
import Form, { useFormContext } from "../../../ui/Form";
import { HiMinusCircle } from "react-icons/hi2";
import usePdfPreview from "../hooks/usePdfPreview";
import AddCVFile from "./AddCVFile";
import FilePreview from "./FilePreview";

function CVInput() {
  const { formState } = useFormContext();
  const cv = formState.cv;

  if (typeof cv == "boolean" || typeof cv == "string") return;

  return (
    <Form.InputContainer>
      <h2 className="mb-2 text-preset-4-bold">CV</h2>
      <Form.Label htmlFor="cv">
        {!cv ? <AddCVFile /> : <FilePreview cv={cv} />}
        <Form.FileInput id="cv" name="cv" hidden accept=".pdf" />
      </Form.Label>
    </Form.InputContainer>
  );
}

export default CVInput;
