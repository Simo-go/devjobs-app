import Button from "../../ui/Button";
import JobLocation from "./JobLocation";
import TimeAndContractType from "./TimeAndContractType";

function JobHeader() {
  return (
    <header className="mb-8 md:mb-10 md:flex md:items-center md:justify-between">
      <div>
        <TimeAndContractType className="mb-1 text-preset-4-regular" />
        <h2 className="mb-1 text-preset-1 text-slate-900">
          Senior Software Engineer
        </h2>
        <JobLocation />
      </div>
      <Button
        size="large"
        variant="primary"
        className="hidden text-preset-4-bold font-bold md:block"
      >
        Apply Now
      </Button>
    </header>
  );
}

export default JobHeader;
