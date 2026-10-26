import { createPortal } from "react-dom";
import Button from "../../ui/Button";

function JobFooter() {
  return createPortal(
    <div className="fixed bottom-0 flex w-full bg-neutral-0/70 p-4 py-6 backdrop-blur-xs">
      <Button
        size="large"
        variant="primary"
        className="mx-auto w-[80%] duration-400"
      >
        Apply Now
      </Button>
    </div>,
    document.body,
  );
}

export default JobFooter;
