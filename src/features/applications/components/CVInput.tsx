import { useEffect, useRef, useState } from "react";
import Form, { useFormContext } from "../../../ui/Form";
import { HiMinusCircle } from "react-icons/hi2";
import usePdfPreview from "../hooks/usePdfPreview";

function CVInput() {
  const { formState } = useFormContext();
  const { canvasRef, cvHasLoaded } = usePdfPreview();

  const cv = formState.cv as File | undefined;
  const lastDot = cv?.name.lastIndexOf(".");
  const name = cv?.name.slice(0, lastDot).trimEnd();
  const extension = cv?.name.slice(lastDot);

  if (typeof cv == "boolean" || typeof cv == "string") return;

  return (
    <Form.InputContainer>
      <h2 className="mb-2 text-preset-4-bold">CV</h2>
      <Form.Label htmlFor="cv">
        {!cv ? (
          <div className="flex items-center justify-center rounded-md border-2 border-dashed border-slate-200 p-6">
            <p className="text-slate-300">Add a CV file here...</p>
          </div>
        ) : (
          <>
            <p className="flex">
              <span className="inline-block max-w-40 truncate">{name}</span>
              <span className="-translate-x-0.5">{extension}</span>
            </p>
            <div className="relative w-fit">
              {cvHasLoaded && (
                <Form.ClearField
                  name="cv"
                  variant="outline"
                  className="absolute top-1 right-1"
                  onClick={() => setCvHasLoaded(false)}
                >
                  <HiMinusCircle
                    className="text-red-500 hover:text-red-500/70"
                    size={20}
                  />
                </Form.ClearField>
              )}
              <canvas ref={canvasRef}></canvas>
            </div>
          </>
        )}
        <Form.FileInput id="cv" name="cv" hidden accept=".pdf" />
      </Form.Label>
    </Form.InputContainer>
  );
}

export default CVInput;
