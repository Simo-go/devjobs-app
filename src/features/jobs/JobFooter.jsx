import { createPortal } from "react-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

function JobFooter({ job }) {
  const { position, companyName, applyUrl } = job;

  return (
    <>
      {createPortal(
        <div className="fixed bottom-0 w-full bg-neutral-0/90 py-6 backdrop-blur-xs md:hidden">
          <Container className="flex items-center justify-between gap-2">
            <div>
              <h2 className="mb-1 text-preset-4-bold text-slate-900 xs:text-preset-3">
                {position}
              </h2>
              <span className="text-preset-4-regular text-slate-500">
                {companyName}
              </span>
            </div>
            <Button
              size="large"
              variant="primary"
              className="text-prest-5! duration-400! xs:text-preset-4-bold!"
              link
              to={applyUrl}
              target="_blank"
            >
              Apply Now
            </Button>
          </Container>
        </div>,
        document.body,
      )}
      <footer className="hidden items-center justify-between gap-2 rounded-b-md md:flex">
        <div>
          <h2 className="mb-1 text-preset-4-bold text-slate-900 xs:text-preset-3">
            Senior Software Engineer
          </h2>
          <span className="text-preset-4-regular text-slate-500">Scoot</span>
        </div>
        <Button
          size="large"
          variant="primary"
          className="text-prest-5! duration-400! xs:text-preset-4-bold!"
          link
          to={applyUrl}
        >
          Apply Now
        </Button>
      </footer>
    </>
  );
}

export default JobFooter;
