import Card from "../../ui/Card";
import JobDetails from "./JobDetails";
import JobFooter from "./JobFooter";
import JobHeader from "./JobHeader";

function JobBox({ job }) {
  return (
    <Card className="px-6 py-10 md:px-11">
      <JobHeader job={job} />
      <JobDetails job={job} />
      <hr className="-mx-6 mb-10 hidden text-slate-300/30 md:block" />
      <JobFooter job={job} />
    </Card>
  );
}

export default JobBox;
