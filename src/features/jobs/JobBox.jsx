import Card from "../../ui/Card";
import Dialog from "../../ui/Dialog";
import ApplicationForm from "../applications/ApplicationForm";
import JobDetails from "./JobDetails";
import JobFooter from "./JobFooter";
import JobHeader from "./JobHeader";

function JobBox({ job }) {
  return (
    <Card className="px-6 py-10 md:px-11">
      <Dialog>
        <JobHeader job={job} />
        <JobDetails job={job} />
        <hr className="-mx-6 mb-10 hidden text-slate-300/30 md:block" />
        <JobFooter job={job} />
        <Dialog.Window className="max-w-182.5">
          <ApplicationForm position={job.position} />
        </Dialog.Window>
      </Dialog>
    </Card>
  );
}

export default JobBox;
