import { HiMinusCircle } from "react-icons/hi2";
import Form from "../../../ui/Form";
import usePdfPreview from "../hooks/usePdfPreview";

function FilePreview({
  cv,
  fileInputRef,
}: {
  cv: File;
  fileInputRef: HTMLInputElement;
}) {
  const { canvasRef, cvHasLoaded, setCvHasLoaded } = usePdfPreview(cv);

  const lastDot = cv?.name.lastIndexOf(".");
  const name = cv?.name.slice(0, lastDot).trimEnd();
  const extension = cv?.name.slice(lastDot);

  function handleClearField() {
    setCvHasLoaded(false);
    fileInputRef.value = "";
  }

  return (
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
            onClick={handleClearField}
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
  );
}

export default FilePreview;
