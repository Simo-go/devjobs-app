import CompanyCard from "./CompanyCard";
import JobBox from "./JobBox";

function JobPosting({ job }) {
  return (
    <div className="pb-40 md:pb-10">
      <CompanyCard job={job} />
      <JobBox job={job} />
    </div>
  );
}

export default JobPosting;
