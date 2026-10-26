import Card from "../../ui/Card";
import JobDetails from "./JobDetails";
import JobFooter from "./JobFooter";
import JobHeader from "./JobHeader";

function JobBox() {
  return (
    <Card className="px-6 py-10">
      <JobHeader />
      <JobDetails />
      <JobFooter />
    </Card>
  );
}

export default JobBox;
