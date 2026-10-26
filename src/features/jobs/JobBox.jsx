import Card from "../../ui/Card";
import JobDetails from "./JobDetails";
import JobFooter from "./JobFooter";
import JobHeader from "./JobHeader";

function JobBox({ job }) {
  return (
    <Card className="px-6 py-10">
      <JobHeader job={job} />
      <JobDetails job={job} />
      <JobFooter job={job} />
    </Card>
  );
}

export default JobBox;
