import { HiMiniArrowLongLeft } from "react-icons/hi2";
import Button from "../../ui/Button";
import JobLocation from "./JobLocation";
import TimeAndContractType from "./TimeAndContractType";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

function JobHeader({ job }) {
  const { position, location, createdAt, contract, applyUrl } = job;

  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { state } = useLocation();
  const comesFromJobList = state?.comesFromJobList ?? false;
  console.log(state);

  return (
    <header className="mb-8 md:mb-10">
      <Button
        variant="outline"
        onClick={() => {
          if (comesFromJobList) return navigate(-1);
          navigate("/");
        }}
        className="mb-8 inline-flex w-auto items-center gap-2 md:mb-4"
      >
        <HiMiniArrowLongLeft className="size-6" />
        <span className="text-prest-5 font-normal">Go back</span>
      </Button>
      <div className="md:flex md:items-center md:justify-between">
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
      </div>
    </header>
  );
}

export default JobHeader;
