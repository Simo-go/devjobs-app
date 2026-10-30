import { HiMiniArrowLongLeft } from "react-icons/hi2";
import Button from "../../ui/Button";
import JobLocation from "./JobLocation";
import TimeAndContractType from "./TimeAndContractType";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

function JobHeader({ job }) {
  const { position, location, createdAt, contract, applyUrl } = job;
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  return (
    <header className="mb-8 md:mb-10 md:flex md:items-center md:justify-between">
      <div>
        <Link
          onClick={(e) => {
            navigate(-1);
          }}
          className="mb-8 flex items-center gap-2 text-slate-900 transition-colors duration-300 hover:text-slate-500 md:mb-4"
        >
          <HiMiniArrowLongLeft className="size-6" />
          <span className="text-prest-5 font-normal">Go back</span>
        </Link>
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
