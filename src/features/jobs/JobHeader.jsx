import Button from "../../ui/Button";
import JobLocation from "./JobLocation";
import TimeAndContractType from "./TimeAndContractType";

function JobHeader({ job }) {
  const { position, location, createdAt, contract, applyUrl } = job;

  return (
    <header className="mb-8 md:mb-10 md:flex md:items-center md:justify-between">
      <div>
        <TimeAndContractType
          className="mb-1 text-preset-4-regular"
          createdAt={createdAt}
          contract={contract}
        />
        <h2 className="mb-1 text-preset-2 text-slate-900">{position}</h2>
        <JobLocation location={location} />
      </div>
      <Button
        size="large"
        variant="primary"
        className="hidden text-preset-4-bold font-bold md:block"
        link
        to={applyUrl}
        target="_blank"
      >
        Apply Now
      </Button>
    </header>
  );
}

export default JobHeader;
