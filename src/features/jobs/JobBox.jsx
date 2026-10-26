import JobDetails from "./JobDetails";
import JobFooter from "./JobFooter";
import JobHeader from "./JobHeader";

function JobBox() {
  return (
    <div className="bg-indigo-500">
      <JobHeader />
      <JobDetails />
      <JobFooter />
    </div>
  );
}

export default JobBox;
